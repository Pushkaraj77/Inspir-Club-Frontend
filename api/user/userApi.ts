import apiService from "../apiService";
import { AxiosResponse } from "axios";

export const registerUserApi = async (
  userData: any
): Promise<AxiosResponse | undefined> => {
  try {
    const data = await apiService.post("/users/signup", userData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUserApi = async (
  userData: any
): Promise<AxiosResponse | undefined> => {
  try {
    const data = await apiService.post(`/users/login`, userData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const loadUserApi = async (): Promise<AxiosResponse | undefined> => {
  try {
    const data = await apiService.get(`/users/me`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const logoutUserApi = async (): Promise<AxiosResponse | undefined> => {
  try {
    const data = await apiService.get(`/logout`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsersApi = async (): Promise<AxiosResponse | undefined> => {
  try {
    const data = await apiService.get(`/users/all`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
