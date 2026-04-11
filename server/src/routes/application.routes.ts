import express from "express";
import {
  createApplication,
  deleteApplication,
  getApplications,
  updateApplication,
} from "../controllers/application.controller";

const router = express.Router();

router.post("/", createApplication);
router.get("/", getApplications);
router.put("/:id", updateApplication);
router.delete("/:id", deleteApplication);

export default router;
