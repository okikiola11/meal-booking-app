import MealService from "../services/MealsServices";

const MealContoller = {
  fetchAllMeals(req, res) {
    const allMeals = MealService.fetchAllMeals();

    return res
      .json({
        status: "success",
        data: allMeals
      })
      .status(200);
  }
};

export default MealContoller;
