import axios from "axios";

export const instance = axios.create({
  baseURL: "https://backend-slip-rep.vercel.app/",
});
