import axios from "axios";
import { API_URL } from "../utils/constants";

export const parseJobDescriptionApi = async (description: string) => {
  const res = await axios.post(`${API_URL}/ai/parse`, {
    description,
  });

  return res.data;
};
