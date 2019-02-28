import mealData from '../utils/mealData';

const MealController = {
  fetchAllMeals(req, res) {
    return res.status(200).json({
      status: 200,
      data: mealData,
    });
  },
  addAMeal(req, res) {
    const {
      name,
      size,
      price,
      summary,
      imageUrl,
    } = req.body;

    const newlyCreatedMeal = {
      id: mealData[mealData.length - 1].id + 1,
      name,
      size,
      price,
      summary,
      imageUrl,
    };

    const oldLength = mealData.length;

    mealData.push(newlyCreatedMeal);
    const newLength = mealData.length;

    if (newLength > oldLength) {
      return res.status(201).json({
        status: 201,
        message: 'New meal has been added',
        data: [newlyCreatedMeal],
      });
    }

    return res.status(500).json({
      status: 500,
      message: 'something went wrong while trying to save your data',
    });
  },

  getSingleMeal(req, res) {
    const id = parseInt(req.params.id, 10);

    const meal = mealData.find(singleMeal => singleMeal.id === id);
    if (meal) {
      return res.status(200).send({
        status: 200,
        message: 'Meal has been retrieved successfully',
        data: [meal],
      });
    }
    return res.status(404).send({
      status: 404,
      message: 'Meal Id does not exist',
    });
  },

  deleteMeal(req, res) {
    const id = parseInt(req.params.id, 10);

    const removedIndex = mealData.findIndex(data => data.id === +id);

    if (removedIndex === -1) {
      return res.status(404).json({
        status: 404,
        error: 'Oooops! no record with such Id',
      });
    }

    mealData.splice(removedIndex, 1);
    return res.status(200).json({
      status: 200,
      message: 'Meal record deleted successfully',
      data: [],
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

    if (mealFound === undefined || mealFound === null) {
      return res.status(404).send({
        status: 404,
        error: 'record id not found',
      });
    }

    const updatedMeal = {
      id: mealFound.id,
      name: req.body.name || mealFound.name,
      price: req.body.price || mealFound.price,
      size: req.body.size || mealFound.size,
      summary: req.body.summary || mealFound.summary,
      imageUrl: req.body.imageUrl || mealFound.imageUrl,
    };

    mealData.splice(mealIndex, 1, updatedMeal);

    return res.status(200).send({
      status: 200,
      message: 'Meal has been successfully updated',
      data: [updatedMeal],
    });
  },
};

export default MealController;
