import mealData from "../utils/mealData";

const MealController = {
  fetchAllMeals(req, res) {
    return res.status(200).json({
      status: 200,
      data: mealData
    });
  }
};

export default MealController;
