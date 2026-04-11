import { Request, Response } from "express";
import Application from "../models/Application";

export const createApplication = async (req: Request, res: Response) => {
  const app = await Application.create(req.body);
  res.status(201).json(app);
};

export const getApplications = async (_req: Request, res: Response) => {
  const apps = await Application.find();
  res.json(apps);
};

export const updateApplication = async (req: Request, res: Response) => {
  const app = await Application.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(app);
};

export const deleteApplication = async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Delete failed",
    });
  }
};
