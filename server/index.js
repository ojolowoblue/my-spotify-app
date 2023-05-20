const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const history = require("connect-history-api-fallback");
const request = require("request");
require("dotenv").config();
const querystring = require("querystring");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const path = require("path");

const {
  AUTH_STATE_KEY,
  CLIENT_ID,
  REDIRECT_URI,
  API_BASE_URL,
  FRONTEND_URI,
  SCOPE,
  PORT,
  CLIENT_SECRET,
} = require("../utils/constants");
const { generateRandomString } = require("../helpers");

if (cluster.isPrimary) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const app = express();

  app
    .use(express.static(path.resolve(__dirname, "./build")))
    .use(cors())
    .use(cookieParser())
    .use(
      history({
        verbose: true,
        rewrites: [
          { from: /\/login/, to: "/login" },
          { from: /\/callback/, to: "/callback" },
          { from: /\/refresh_token/, to: "/refresh_token" },
        ],
      })
    );

  app.get("/", (req, res) => {
    res.send("Hello");
  });

  app.get("/login", (req, res) => {
    const state = generateRandomString(16);

    res.cookie(AUTH_STATE_KEY, state);

    res.redirect(
      `${API_BASE_URL}/authorize?${querystring.stringify({
        response_type: "code",
        client_id: CLIENT_ID,
        scope: SCOPE,
        redirect_uri: REDIRECT_URI,
        state: state,
      })}`
    );
  });

  app.get("/callback", (req, res) => {
    const code = req.query.code || null;
    const state = req.query.state || null;
    const storedState = req.cookies ? req.cookies[AUTH_STATE_KEY] : null;

    if (state === null || state !== storedState) {
      res.redirect(`/#${querystring.stringify({ error: "state_mismatch" })}`);
    } else {
      res.clearCookie(AUTH_STATE_KEY);
      const authOptions = {
        url: `${API_BASE_URL}/api/token`,
        form: {
          code: code,
          redirect_uri: REDIRECT_URI,
          grant_type: "authorization_code",
        },
        headers: {
          Authorization: `Basic ${new Buffer.from(
            `${CLIENT_ID}:${CLIENT_SECRET}`
          ).toString("base64")}`,
        },
        json: true,
      };

      request.post(authOptions, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const access_token = body.access_token;
          const refresh_token = body.refresh_token;

          res.redirect(
            `${FRONTEND_URI}/#${querystring.stringify({
              access_token,
              refresh_token,
            })}`
          );
        } else {
          res.redirect(
            `/#${querystring.stringify({ error: "invalid_token" })}`
          );
        }
      });
    }
  });

  app.get("*", (req, res) => {
    res.send("Hello");
  });

  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
}
