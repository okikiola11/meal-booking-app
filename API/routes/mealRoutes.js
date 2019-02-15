import { Router } from "express";

import MealController from "../controller/mealController";

const router = Router();

router.get("/", MealController.fetchAllMeals);

export default router;
