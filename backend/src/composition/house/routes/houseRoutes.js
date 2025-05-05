import express from "express";
import houseController from "../controller/houseController.js";

const router = express.Router();

router.get("/:id", houseController.getHouseById);

export default router;
