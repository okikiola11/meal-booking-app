import { Router } from "express";

import MealController from "../controller/mealController";

const router = Router();

router.get("/", MealController.fetchAllMeals);
router.post("/", MealController.addAMeal);

export default router;
