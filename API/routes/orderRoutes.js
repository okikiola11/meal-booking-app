import { Router } from "express";

import orderController from "../controller/orderController";

const router = Router();

router.get("/", orderController.fetchAllOrder);
router.post("/", orderController.addAnOrder);
router.put("/:id", orderController.modifyAnOrder);

export default router;
