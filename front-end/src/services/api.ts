import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    // post: {
    //   "Content-Type": "application/json",
    // },
    get: {
      "Content-Type": "application/json",
    },
    delete: {
      "Content-Type": "application/json",
    },
  },
});
