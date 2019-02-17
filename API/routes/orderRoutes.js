import { Router } from "express";

import orderController from "../controller/orderController";

const router = Router();

router.get("/", orderController.fetchAllOrder);
router.post("/", orderController.addAnOrder);

export default router;
