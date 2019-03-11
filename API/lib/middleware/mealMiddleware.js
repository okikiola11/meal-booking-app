"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var MealMiddleware = {
  addAMeal: function addAMeal(req, res, next) {
    if (req.user.isAdmin === false) {
      return res.status(403).json({
        status: 403,
        message: 'Cannot add a meal'
      });
    }

    next();
  },
  fetchAllMeals: function fetchAllMeals(req, res, next) {
    if (req.user.isAdmin === false) {
      return res.status(403).json({
        status: 403,
        message: 'Cannot grant access to fecth all meals'
      });
    }

    next();
  },
  getSingleMeal: function getSingleMeal(req, res, next) {
    if (req.user.isAdmin === false) {
      return res.status(403).json({
        status: 403,
        message: 'Access denied to get single meal'
      });
    }

    next();
  },
  updateAMeal: function updateAMeal(req, res, next) {
    if (req.user.isAdmin === false) {
      return res.status(403).json({
        status: 403,
        message: 'Access denied to update meal'
      });
    }

    next();
  },
  deleteMeal: function deleteMeal(req, res, next) {
    if (req.user.isAdmin === false) {
      return res.status(403).json({
        status: 403,
        message: 'Cannot delete meal'
      });
    }

    next();
  }
};
var _default = MealMiddleware;
exports.default = _default;