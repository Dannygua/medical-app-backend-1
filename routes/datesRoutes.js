import express from "express";
import checkAuth from "../middleware/checkAuth.js";
import { createDate, getDatesByEspecialist } from "../controllers/datesController.js";

const router = express.Router();

router.post("/", checkAuth, createDate);
router.get("/byEspecialist/:id", checkAuth, getDatesByEspecialist);

export default router;
