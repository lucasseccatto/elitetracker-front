import axios from "axios";
import { localStorageKey } from "../hooks/use-user";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem(localStorageKey);

  const token = userData && JSON.parse(userData).tpken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
