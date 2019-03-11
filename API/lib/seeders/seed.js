"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _index = _interopRequireDefault(require("../model/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Seed = function Seed() {
  _index.default.User.create({
    username: 'kikiolla1',
    email: 'admin.admin@gmail.com',
    password: _bcryptjs.default.hashSync('admin123', _bcryptjs.default.genSaltSync(8)),
    isAdmin: true // is an Admin

  }).then(function (result) {
    console.log(result);
  }).catch(function (error) {
    console.log(error);
  });

  _index.default.Meal.create({
    name: 'Rice with beef',
    size: 'medium',
    price: 1500,
    summary: 'Rice belongs to the carbohydrate family',
    imageUrl: 'meal1.jpg'
  }).then(function () {// console.log('Success');
  }).catch(function (error) {// console.log(error);
  });

  _index.default.Menu.create({
    menuType: 'Special',
    meal: 'Rice with beef',
    size: 'medium',
    price: 1500,
    summary: 'Rice belongs to the carbohydrate family',
    imageUrl: 'meal1.jpg',
    mealId: 1
  }).then(function () {// console.log('Success');
  }).catch(function (error) {
    console.log(error);
  });

  _index.default.Order.create({
    username: 'Apelehin Okikiola',
    email: 'shade23@gmail.com',
    phoneNumber: '080231',
    meal: 'Rice with beef',
    size: 'medium',
    price: 1500,
    expirydate: '2016-04-25 14:35:58',
    userId: 1,
    mealId: 1
  }).then(function (result) {// console.log(result);
  }).catch(function (error) {// console.log(error);
  });
};

var _default = Seed;
exports.default = _default;