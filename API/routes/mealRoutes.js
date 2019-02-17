import { Router } from "express";

import MealController from "../controller/mealController";

const router = Router();

router.get("/", MealController.fetchAllMeals);
router.post("/", MealController.addAMeal);
router.get("/:id", MealController.getSingleMeal);
router.delete("/:id", MealController.deleteMeal);
router.put("/:id", MealController.updateAMeal);

export default router;
