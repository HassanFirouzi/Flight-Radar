import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com/flights",
  timeout: 10000,
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
});

export default api;
