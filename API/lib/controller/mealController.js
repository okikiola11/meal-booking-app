"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mealData = _interopRequireDefault(require("../utils/mealData"));

var _mealModels = _interopRequireDefault(require("../model/mealModels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealController = {
  fetchAllMeals: function fetchAllMeals(req, res) {
    return res.status(200).json({
      status: 200,
      data: _mealData.default
    });
  },
  addAMeal: function addAMeal(req, res) {
    var _req$body = req.body,
        name = _req$body.name,
        size = _req$body.size,
        price = _req$body.price,
        summary = _req$body.summary,
        imageUrl = _req$body.imageUrl;
    var newlyCreatedMeal = {
      id: _mealData.default[_mealData.default.length - 1].id + 1,
      name: name,
      size: size,
      price: price,
      summary: summary,
      imageUrl: imageUrl
    };

    var data = _mealData.default.push(newlyCreatedMeal);

    if (data) {
      return res.status(201).json({
        status: 201,
        message: 'New meal has been added',
        data: [newlyCreatedMeal]
      });
    }

    return res.status(500).json({
      status: 500,
      message: 'something went wrong while trying to save your data'
    });
  },
  getSingleMeal: function getSingleMeal(req, res) {
    var id = parseInt(req.params.id, 10);

    _mealData.default.map(function (mealData) {
      if (mealData.id === id) {
        return res.status(200).send({
          status: 200,
          message: 'Meal has been retrieved successfully',
          data: [mealData]
        });
      }
    });

    return res.status(404).send({
      status: 404,
      message: 'Meal Id does not exist'
    });
  },
  deleteMeal: function deleteMeal(req, res) {
    var error = {};
    var id = parseInt(req.params.id, 10);

    var removedIndex = _mealData.default.findIndex(function (data) {
      return data.id === +id;
    });

    if (removedIndex === -1) {
      error.mgs = 'Oooops! no record with such Id';
      return res.status(404).json({
        status: 404,
        error: error
      });
    }

    _mealData.default.splice(removedIndex, 1);

    return res.status(200).json({
      status: 200,
      message: 'Meal record deleted successfully',
      data: []
    });
  },
  updateAMeal: function updateAMeal(req, res) {
    var id = parseInt(req.params.id, 10);
    var mealFound;
    var mealIndex;

    _mealData.default.map(function (mealData, index) {
      if (mealData.id === id) {
        mealFound = mealData;
        mealIndex = index;
      }
    });

    if (mealFound === undefined || mealFound === null) {
      var error = {};
      error.mgs = 'record id not found';
      return res.status(404).send({
        status: 404,
        error: error
      });
    }

    var updatedMeal = {
      id: mealFound.id,
      name: req.body.name || mealFound.name,
      price: req.body.price || mealFound.price,
      size: req.body.size || mealFound.size,
      summary: req.body.summary || mealFound.summary,
      imageUrl: req.body.imageUrl || mealFound.imageUrl
    };

    _mealData.default.splice(mealIndex, 1, updatedMeal);

    return res.status(200).send({
      status: 200,
      message: 'Meal has been successfully updated',
      data: [updatedMeal]
    });
  }
};
var _default = MealController;
exports.default = _default;