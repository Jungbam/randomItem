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

client.interceptors.response.use(function (response) {
  cookie.set(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY3MTQ5NzgwOX0.zybYkuL8jpDhb0pIImOHtONvubbFp_O8ZLQ8gnH0Jks"
  );
  return response;
});
