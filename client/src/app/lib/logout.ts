import {
  SPOTIFY_ACCESS_TOKEN,
  SPOTIFY_REFRESH_TOKEN,
  SPOTIFY_TOKEN_TIMESTAMP,
} from "app/constants/variables";
import storage from "./storage";

export const logout = () => {
  storage.remove(SPOTIFY_TOKEN_TIMESTAMP);
  storage.remove(SPOTIFY_ACCESS_TOKEN);
  storage.remove(SPOTIFY_REFRESH_TOKEN);

  window.location.reload();
};
