import mealData from "../utils/mealData";

const MealController = {
  fetchAllMeals(req, res) {
    return res.status(200).json({
      status: 200,
      data: mealData
    });
  },
  addAMeal(req, res) {
    const { name, size, price, summary, imageUrl } = req.body;
    if (!req.body.name) {
      return res.status(400).send({
        success: "false",
        message: "name is required"
      });
    }

    const newlyCreatedMeal = {
      id: mealData[mealData.length - 1].id + 1,
      name,
      size,
      price,
      summary,
      imageUrl
    };

    const data = mealData.push(newlyCreatedMeal);
    return res.status(201).json({
      status: 201,
      message: "New meal has been added",
      data: [newlyCreatedMeal]
    });
  },

  getSingleMeal(req, res) {
    const id = parseInt(req.params.id, 10);

    mealData.map(mealData => {
      if (mealData.id === id) {
        return res.status(200).send({
          success: "true",
          message: "Meal has been retrieved successfully",
          mealData
        });
      }
    });
    return res.status(404).send({
      success: "false",

      message: "meal does not exist"
    });
  }
};

export default MealController;
