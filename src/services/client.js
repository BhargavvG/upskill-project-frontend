import axios from "axios";

let token = "";

if (localStorage.token) {
  token = localStorage.getItem("token");
}
const client = axios.create({
  // baseURL: process.env.REACT_APP_BACKEND_API,
  baseURL: "http://localhost:5000/",
  headers: { "access-token": token },
});

export default client;
