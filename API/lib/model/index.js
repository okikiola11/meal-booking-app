"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sequelize = new _sequelize.default('bookmeal', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});
var models = {
  User: sequelize.import('./userModel'),
  Meal: sequelize.import('./mealModel'),
  Menu: sequelize.import('./menuModel'),
  Order: sequelize.import('./orderModel')
};
Object.keys(models).forEach(function (modelName) {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});
models.sequelize = sequelize;
models.Sequelize = _sequelize.default;
var _default = models;
exports.default = _default;