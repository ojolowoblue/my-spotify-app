import storage from "app/lib/storage";

import {
  SPOTIFY_ACCESS_TOKEN,
  SPOTIFY_REFRESH_TOKEN,
  SPOTIFY_TOKEN_TIMESTAMP,
} from "../constants/variables";

/**
 *
 * @param {string} str encode string
 * @returns {string}
 */

export const encodeString = (str: string): string =>
  btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) =>
      String.fromCharCode(parseInt(p1, 16))
    )
  );

/**
 *
 * @param {string} str decode string
 * @returns {string}
 */

export const decodeString = (str: string): string =>
  decodeURIComponent(
    Array.prototype.map
      .call(
        atob(str),
        (c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
      )
      .join("")
  );

export const getHashParams = () => {
  const hashParams: { [key: string]: string } = {};
  let e: string[] | null;
  const r = /([^&;=]+)=?([^&;]*)/g;
  const q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
};

export const setTokenTimestamp = () =>
  storage.set(SPOTIFY_TOKEN_TIMESTAMP, String(Date.now()));

export const setLocalAccessToken = (token: string) => {
  setTokenTimestamp();
  storage.set(SPOTIFY_ACCESS_TOKEN, token);
};

export const setLocalRefreshToken = (token: string) =>
  storage.set(SPOTIFY_REFRESH_TOKEN, token);

export const getTokenTimestamp = () => storage.get(SPOTIFY_TOKEN_TIMESTAMP);

export const getLocalAccessToken = () => storage.get(SPOTIFY_ACCESS_TOKEN);

export const getLocalRefreshToken = () => storage.get(SPOTIFY_REFRESH_TOKEN);
