import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "./baseUrl";
import getCookie from "../helpers/getCookie";

const apiService: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

apiService.interceptors.request.use((config: any) => {
  const authToken = getCookie("token");
  if (authToken) {
    config.headers["Authorization"] = `Bearer ${authToken}`;
  }
  return config;
});

export default apiService;
