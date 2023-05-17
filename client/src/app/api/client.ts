import axios from "axios";

import { API_BASE_URL } from "app/constants/variables";
import getToken from "app/lib/getToken";

const token = getToken();

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default client;
