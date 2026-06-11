import axios from "axios";

const API = axios.create({
  baseURL: "https://mailflex-backend-production.up.railway.app"
});

export default API;