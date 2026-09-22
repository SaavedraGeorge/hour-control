import { Router } from "express";
import {
  getWorkdays,
  getWorkdayById,
  createWorkday
} from "../controllers/workdays.controller.js";

const router = Router();

// Mapeo directo entre verbo HTTP + endpoint y su función controladora
router.get("/", getWorkdays);
router.get("/:id", getWorkdayById);
router.post("/", createWorkday);

export default router;