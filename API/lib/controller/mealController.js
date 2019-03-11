"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../model/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealController = {
  addAMeal: function addAMeal(req, res) {
    var _req$body = req.body,
        name = _req$body.name,
        size = _req$body.size,
        price = _req$body.price,
        summary = _req$body.summary,
        imageUrl = _req$body.imageUrl;
    return _index.default.Meal.create({
      name: name,
      size: size,
      price: price,
      summary: summary,
      imageUrl: imageUrl
    }).then(function (meals) {
      res.status(201).json({
        status: 201,
        message: 'New meal has been added',
        data: meals
      });
    }).catch(function () {
      res.status(500).json({
        status: 500,
        message: 'something went wrong while trying to save your data'
      });
    });
  },
  fetchAllMeals: function fetchAllMeals(req, res) {
    return _index.default.Meal.findAll().then(function (meals) {
      res.status(200).json({
        status: 200,
        data: meals
      });
    }).catch(function () {
      res.status(404).json({
        status: 404,
        message: 'Cannot fetch all meal'
      });
    });
  },
  getSingleMeal: function getSingleMeal(req, res) {
    var id = parseInt(req.params.id, 10);
    return _index.default.Meal.findById(id).then(function (meals) {
      res.status(200).json({
        status: 200,
        message: 'Meal has been retrieved successfully',
        data: meals
      });
    }).catch(function () {
      res.status(404).json({
        status: 404,
        message: 'Meal Id does not exist'
      });
    });
  },
  updateAMeal: function updateAMeal(req, res) {
    return _index.default.Meal.find({
      where: {
        mealId: parseInt(req.params.id, 10)
      }
    }).then(function (meals) {
      if (!meals) {
        return res.status(404).send({
          status: 404,
          error: 'record id not found'
        });
      }

      return meals.update({
        name: req.body.name || meals.name,
        size: req.body.size || meals.size,
        price: req.body.price || meals.price,
        summary: req.body.summary || meals.summary,
        imageUrl: req.body.imageUrl || meals.imageUrl
      }).then(function (meals) {
        res.status(200).json({
          status: 200,
          message: 'Meal has been successfully updated',
          data: meals
        });
      }).catch(function () {
        res.status(404).json({
          status: 404,
          error: 'record id not found'
        });
      });
    });
  },
  deleteMeal: function deleteMeal(req, res) {
    return _index.default.Meal.find({
      where: {
        mealId: parseInt(req.params.id, 10)
      }
    }).then(function (meals) {
      if (!meals) {
        return res.status(404).send({
          status: 404,
          error: 'record id not found'
        });
      }

      return meals.destroy().then(function (meals) {
        res.status(200).json({
          status: 200,
          message: 'Meal record deleted successfully',
          data: []
        });
      }).catch(function () {
        res.status(404).json({
          status: 404,
          error: 'Oooops! no record with such Id'
        });
      });
    });
  }
};
var _default = MealController;
exports.default = _default;