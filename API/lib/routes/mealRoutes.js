"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _mealController = _interopRequireDefault(require("../controller/mealController"));

var _authMiddleware = _interopRequireDefault(require("../middleware/authMiddleware"));

var _mealMiddleware = _interopRequireDefault(require("../middleware/mealMiddleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.use('/', _authMiddleware.default.verifyToken);
router.get('/', _mealMiddleware.default.fetchAllMeals, _mealController.default.fetchAllMeals);
router.post('/', _mealMiddleware.default.addAMeal, _mealController.default.addAMeal);
router.get('/:id', _mealMiddleware.default.getSingleMeal, _mealController.default.getSingleMeal);
router.delete('/:id', _mealMiddleware.default.deleteMeal, _mealController.default.deleteMeal);
router.put('/:id', _mealMiddleware.default.updateAMeal, _mealController.default.updateAMeal);
var _default = router;
exports.default = _default;