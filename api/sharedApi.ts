import apiService from "./apiService";
import { AxiosResponse } from "axios";

export const loginApi = async (
  userData: any
): Promise<AxiosResponse | undefined> => {
  try {
    const data = await apiService.post(`/login`, userData);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const profileStatusApi = async (
  id: string,
  status: string
): Promise<AxiosResponse> => {
  try {
    const data = await apiService.put(`/profile-status/${id}`, { status });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
