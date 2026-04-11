import express from "express";
import { parseJob } from "../controllers/ai.controller";

const router = express.Router();

router.post("/parse", parseJob);

export default router;
