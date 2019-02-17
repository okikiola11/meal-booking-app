import mealData from "../utils/mealData";
import mealModel from "../model/mealModels";

const MealController = {
  fetchAllMeals(req, res) {
    return res.status(200).json({
      status: 200,
      data: mealData
    });
  },
  addAMeal(req, res) {
    const { name, size, price, summary, imageUrl } = req.body;

    const newlyCreatedMeal = {
      id: mealData[mealData.length - 1].id + 1,
      name,
      size,
      price,
      summary,
      imageUrl
    };

    const data = mealData.push(newlyCreatedMeal);
    if (data) {
      return res.status(201).json({
        status: 201,
        message: "New meal has been added",
        data: [newlyCreatedMeal]
      });
    }

    return res.status(500).json({
      status: 500,
      message: "something went wrong while trying to save your data"
    });
  },

  getSingleMeal(req, res) {
    const id = parseInt(req.params.id, 10);

    mealData.map(mealData => {
      if (mealData.id === id) {
        return res.status(200).send({
          success: 200,
          message: "Meal has been retrieved successfully",
          mealData
        });
      }
    });
    return res.status(404).send({
      success: 404,
      message: "meal does not exist"
    });
  },

  deleteMeal(req, res) {
    const error = {};
    const id = parseInt(req.params.id, 10);

    const removedIndex = mealData.findIndex(data => data.id === +id);
    if (removedIndex === -1) {
      error.mgs = "Oooops! no record with such Id";
      return res.status(404).json({ status: 404, error });
    }

    mealData.splice(removedIndex, 1);
    return res.status(200).json({
      status: 200,
      data: [{ id, message: "Meal record deleted successfully" }]
    });
  },

  updateAMeal(req, res) {
    const id = parseInt(req.params.id, 10);

    let mealFound;
    let mealIndex;
    mealData.map((mealData, index) => {
      if (mealData.id === id) {
        mealFound = mealData;
        mealIndex = index;
      }
    });

    if (!mealFound) {
      const error = {};
      error.mgs = "record id not found";

      return res.status(404).send({
        status: 404,
        error
      });
    }

    const updatedMeal = {
      id: mealFound.id,
      name: req.body.name || mealFound.name,
      price: req.body.price || mealFound.price,
      size: req.body.size || mealFound.size,
      summary: req.body.summary || mealFound.summary,
      imageUrl: req.body.imageUrl || mealFound.imageUrl
    };

    mealData.splice(mealIndex, 1, updatedMeal);

    return res.status(201).send({
      success: 200,
      message: "Meal has been successfully updated",
      updatedMeal
    });
  }
};

export default MealController;