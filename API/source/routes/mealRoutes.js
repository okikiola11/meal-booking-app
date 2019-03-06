import { Router } from 'express';

import MealController from '../controller/mealController';
import authMiddleware from '../middleware/authMiddleware';
import MealMiddleware from '../middleware/mealMiddleware';

const router = Router();

router.use('/', authMiddleware.verifyToken);
router.get('/', MealMiddleware.fetchAllMeals, MealController.fetchAllMeals);
router.post('/', MealMiddleware.addAMeal, MealController.addAMeal);
router.get('/:id', MealMiddleware.getSingleMeal, MealController.getSingleMeal);
router.delete('/:id', MealMiddleware.deleteMeal, MealController.deleteMeal);
router.put('/:id', MealMiddleware.updateAMeal, MealController.updateAMeal);

export default router;
