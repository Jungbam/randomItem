import axios from "axios";
import { Cookies } from "react-cookie";

export const client = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});

const cookie = new Cookies();

client.interceptors.request.use(function (config) {
  config.headers.authorization = `Bearer ${cookie.get("token")}`;

  return config;
});

client.interceptors.response.use(
  function (response) {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      cookie.remove("token");
      window.location.reload("/");
    }
  }
);
