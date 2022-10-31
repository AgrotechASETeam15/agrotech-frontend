import axios from "axios";

const API_URL = "http://localhost:8080/";

console.log(`API: `, API_URL);

export default axios.create({
  baseURL: API_URL,
});
