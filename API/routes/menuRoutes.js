import { Router } from "express";

import MenuController from "../controller/menuController";

const router = Router();

router.get("/", MenuController.fetchAllMenu);

export default router;
