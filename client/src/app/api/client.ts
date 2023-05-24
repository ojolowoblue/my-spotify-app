import axios, { AxiosRequestConfig } from "axios";

import { API_BASE_URL } from "app/constants/variables";
import getToken from "app/lib/getToken";

const token = getToken();

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//@ts-expect-error
client.interceptors.request.use((config) => {
  const accessToken = getToken();

  let noTokenRequired = (config.headers?.["noToken"] as boolean) ?? false;
  const accessTokenRequired =
    (config.headers?.["accessTokenRequired"] as boolean) ?? false;

  if (noTokenRequired && accessTokenRequired) {
    noTokenRequired = false;
  }

  const customConfig: AxiosRequestConfig = {
    ...config,
    headers: {
      ...config.headers,
    },
  };

  if (!customConfig.headers) return customConfig;

  // delete these headers so we don't send them along with every request
  delete customConfig.headers["noToken"];
  delete customConfig.headers["accessTokenRequired"];

  // if accessToken is undefimed and the noToken header is true return the customConfig else define the Authorization Header
  if (!accessToken || noTokenRequired) return customConfig;

  customConfig.headers["Authorization"] = `Bearer ${token}`;

  return customConfig;
});

export default client;
