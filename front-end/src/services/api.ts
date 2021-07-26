import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.1.10:8080/api" || "http://7fb131fbd17d.ngrok.io/api",
  headers: {
    post: {
      "Content-Type": "application/json",
    },
    get: {
      "Content-Type": "application/json",
    },
    delete: {
      "Content-Type": "application/json",
    },
  },
});
