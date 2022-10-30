import axios from "axios";

const API_URL = process.env.API_URL;

console.log(`API: `, API_URL);

export default axios.create({
  baseURL: API_URL,
});
