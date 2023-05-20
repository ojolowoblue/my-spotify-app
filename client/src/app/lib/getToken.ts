import {
  getHashParams,
  getLocalAccessToken,
  getTokenTimestamp,
  setLocalAccessToken,
  setLocalRefreshToken,
} from "app/utils/helpers";
import refreshAccessToken from "app/lib/refreshToken";

/**
 *
 * @returns {string} returns an 'access_token'
 */

export default function getToken() {
  const EXPIRATION_TIME = 3600 * 1000; // 1 hour

  const { error, access_token, refresh_token } = getHashParams();

  console.log("access token", access_token);

  const accessToken = getLocalAccessToken();

  if (error) {
    console.error(error);
    refreshAccessToken();
  }

  // If there is no ACCESS token in local storage, set it and return `access_token` from params
  if ((!accessToken || accessToken === "undefined") && access_token) {
    setLocalAccessToken(access_token);
    setLocalRefreshToken(refresh_token);
    return access_token;
  }

  // Refresh ACCESS token if token has expired
  if (Number(Date.now()) - Number(getTokenTimestamp()) > EXPIRATION_TIME) {
    console.warn("Access token has expired, refreshing...");
    refreshAccessToken();
  }

  return accessToken;
}
