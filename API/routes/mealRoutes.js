import { Router } from "express";

//controller
import MealContoller from "../controller/mealController";

const router = Router();

router.get("/", MealContoller.fetchAllMeals);

export default router;
