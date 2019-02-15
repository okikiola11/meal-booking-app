import mealData from "../utils/mealData";
import Meal from "../model/mealModels";

const MealService = {
  fetchAllMeals() {
    const validMeals = mealData.meals.map(meal => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      newMeal.summary = meal.summary;
      newMeal.image = meal.image;
      return newMeal;
    });

    return validMeals;
  }
};

export default MealService;
