import express from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router.get("/:id", userController.getUserById);
router.get("/device/:id", userController.getUserDeviceById);

export default router;
