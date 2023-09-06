import axios from "axios";

const jsonServer = axios.create({
  baseURL: "http://localhost:3000",
});

export default jsonServer;
