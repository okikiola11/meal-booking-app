"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _mealController = _interopRequireDefault(require("../controller/mealController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.get("/", _mealController.default.fetchAllMeals);
router.post("/", _mealController.default.addAMeal);
router.get("/:id", _mealController.default.getSingleMeal);
router.delete("/:id", _mealController.default.deleteMeal);
router.put("/:id", _mealController.default.updateAMeal);
var _default = router;
exports.default = _default;