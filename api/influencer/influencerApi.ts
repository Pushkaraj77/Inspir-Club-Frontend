import apiService from "../apiService";
import { AxiosResponse } from "axios";

export const registerInfluencerApi = async (
  userData: any
): Promise<AxiosResponse | undefined> => {
  try {
    console.log(userData);
    const data = await apiService.post("/influencers/signup", userData);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const loginApi = async (
  userData: any
): Promise<AxiosResponse | undefined> => {
  try {
    const data = await apiService.post(`/influencers/login`, userData);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const profileStatusApi = async (
  id: string,
  status: string
): Promise<AxiosResponse> => {
  try {
    const data = await apiService.put(`/influencers/profile-status/${id}`, {
      status,
    });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const loadInfluencerApi = async (): Promise<
  AxiosResponse | undefined
> => {
  try {
    const data = await apiService.get(`/influencers/me`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const logoutInfluencerApi = async (): Promise<
  AxiosResponse | undefined
> => {
  try {
    const data = await apiService.get(`/logout`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

type Influencer = {
  _id: string;
  fullName: string;
  location: string;
  profilePhotoUrl: any;
  niche: string;
  socialLinks: {
    tiktok: string;
    facebook: string;
    linkedin: string;
    instagram: string;
    website: string;
    youtube: string;
    twitter: string;
  };
};

interface InfluencerApiData {
  influencers: Influencer[];
  influencersCount: number;
  resultPerPage: number;
  success: boolean;
}

export const getAll = async (): Promise<any | undefined> => {
  try {
    const response = await apiService.get(`/influencers/all-influencers`);
    return response?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllInfluencersApi = async (
  keyword: string = "",
  platform: string = "",
  currentPage: number = 1
): Promise<InfluencerApiData | undefined> => {
  try {
    const response = await apiService.get(
      `/influencers/all?platform=${platform}&keyword=${keyword}&page=${currentPage}`
    );
    return response?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getInfluencerByIdApi = async (
  id: string
): Promise<Influencer | undefined> => {
  try {
    const response = await apiService.get(`/influencers/${id}`);
    return response?.data.influencer;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
