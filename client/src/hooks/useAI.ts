import { parseJobDescriptionApi } from "../api/aiApi";

export const useAI = () => {
  const parseJob = async (desc: string) => {
    return await parseJobDescriptionApi(desc);
  };

  return { parseJob };
};
