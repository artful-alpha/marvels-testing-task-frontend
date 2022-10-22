import axios from "axios";

const baseServer = axios.create({
  baseURL: "http://localhost:3013",
});

export default baseServer;
