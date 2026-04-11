import axios from "axios";
import { API_URL } from "../utils/constants";

export const getApplicationsApi = async () => {
  const res = await axios.get(`${API_URL}/applications`);
  return res.data;
};

export const createApplicationApi = async (data: any) => {
  const res = await axios.post(`${API_URL}/applications`, data);
  return res.data;
};

export const deleteApplicationApi = async (id: string) => {
  const res = await axios.delete(`${API_URL}/applications/${id}`); // ✅ FIXED
  return res.data;
};
