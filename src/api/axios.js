import axios from "axios";
import { Cookies } from "react-cookie";

export const client = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
});

const cookie = new Cookies();

client.interceptors.request.use(function (config) {
  config.headers.authorization = `Bearer ${cookie.get("token")}`;
  console.log(config);
  return config;
});

client.interceptors.response.use(function (response) {
  cookie.set(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY3MTQ2NDYzNH0.uspG4BbeIzPqlXY3FaV52iGpsqRA_w_3-k7H2d-a5Oc"
  );
  return response;
});
