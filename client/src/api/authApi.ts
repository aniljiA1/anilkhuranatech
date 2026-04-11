import axios from "axios";
import { API_URL } from "../utils/constants";

export const loginApi = async (data: any) => {
  const res = await axios.post(`${API_URL}/auth/login`, data);
  return res.data;
};

export const registerApi = async (data: any) => {
  console.log("REGISTER DATA SENT:", data);

  try {
    const res = await axios.post(`${API_URL}/auth/register`, data);
    return res.data;
  } catch (error: any) {
    console.log("REGISTER ERROR:", error.response.data);
    throw error;
  }
};
