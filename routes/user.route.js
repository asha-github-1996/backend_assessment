import express from "express";
import {
  testController,
  updateUser,
  getUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", testController);

router.post("/update/:id", verifyToken, updateUser);
router.get("/:id", verifyToken, getUser);

export default router;
