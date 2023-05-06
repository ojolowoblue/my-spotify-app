const AUTH_STATE_KEY = "spotify_auth_state";

/**
 * The application request authorization
 *
 * The scope enable the application to access specific functionality (e.g. read a playlist, modify your library or just streaming) on behalf of a user
 */

const SCOPE =
  "user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const FRONTEND_URI = process.env.FRONTEND_URI;
const API_BASE_URL = process.env.API_BASE_URL;
const PORT = process.env.PORT;

module.exports = {
  AUTH_STATE_KEY,
  SCOPE,
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  API_BASE_URL,
  FRONTEND_URI,
  PORT,
};
