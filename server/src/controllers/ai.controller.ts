import { Request, Response } from "express";
import { analyzeJobDescription } from "../services/openai.service";

export const parseJob = async (req: Request, res: Response) => {
  const { description } = req.body;
  const result = await analyzeJobDescription(description);
  res.json(result);
};
