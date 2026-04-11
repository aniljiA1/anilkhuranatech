import { Request, Response } from "express";
import Application from "../models/Application";

// ✅ Create Application
export const createApplication = async (req: Request, res: Response) => {
  try {
    const app = await Application.create(req.body);
    res.status(201).json(app);
  } catch (error) {
    res.status(500).json({ message: "Failed to create application" });
  }
};

// ✅ Get All Applications
export const getApplications = async (_req: Request, res: Response) => {
  try {
    const apps = await Application.find();
    res.status(200).json(apps);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch applications" });
  }
};

// ✅ Update Application
export const updateApplication = async (req: Request, res: Response) => {
  try {
    const app = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!app) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json(app);
  } catch (error) {
    res.status(500).json({ message: "Failed to update application" });
  }
};

// ✅ Delete Application
export const deleteApplication = async (req: Request, res: Response) => {
  try {
    const app = await Application.findByIdAndDelete(req.params.id);

    if (!app) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json({
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Delete failed",
    });
  }
};
