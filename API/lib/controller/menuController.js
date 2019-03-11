"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../model/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuController = {
  fetchAllMenu: function fetchAllMenu(req, res) {
    return _index.default.Menu.findAll().then(function (menus) {
      res.status(200).json({
        status: 200,
        data: menus
      });
    }).catch(function () {
      res.status(404).json({
        status: 404,
        message: 'Cannot fetch all menu'
      });
    });
  },
  getSingleMenu: function getSingleMenu(req, res) {
    var menuId = parseInt(req.params.id, 10);
    return _index.default.Menu.findById(menuId).then(function (menus) {
      res.status(200).json({
        status: 200,
        message: 'Menu has been retrieved successfully',
        data: menus
      });
    }).catch(function () {
      res.status(404).json({
        status: 404,
        message: 'Menu record does not exist'
      });
    });
  },
  addAMenu: function addAMenu(req, res) {
    var _req$body = req.body,
        menuType = _req$body.menuType,
        meal = _req$body.meal,
        size = _req$body.size,
        price = _req$body.price,
        summary = _req$body.summary,
        imageUrl = _req$body.imageUrl;
    return _index.default.Menu.create({
      menuType: menuType,
      meal: meal,
      size: size,
      price: price,
      summary: summary,
      imageUrl: imageUrl
    }).then(function (menus) {
      res.status(201).json({
        status: 201,
        message: 'New menu has been added',
        data: menus
      });
    }).catch(function () {
      res.status(500).json({
        status: 500,
        message: 'could not save your data'
      });
    });
  }
};
var _default = MenuController;
exports.default = _default;