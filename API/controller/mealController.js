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
      return res.status(404).send({
        success: "false",
        message: "Meal cannot be found"
      });
    }

    if (!req.body.name) {
      return res.status(400).send({
        success: "false",
        message: "Name is required"
      });
    } else if (!req.body.price) {
      return res.status(400).send({
        success: "false",
        message: "Price is required"
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
      success: "true",
      message: "Meal has been successfully updated",
      updatedMeal
    });
  }
};

export default MealController;
