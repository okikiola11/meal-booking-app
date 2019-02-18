"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menuData = _interopRequireDefault(require("../utils/menuData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuController = {
  fetchAllMenu: function fetchAllMenu(req, res) {
    return res.status(200).json({
      status: 200,
      data: _menuData.default
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
    var newlyCreatedMenu = {
      id: _menuData.default[_menuData.default.length - 1].id + 1,
      menuType: menuType,
      meal: meal,
      size: size,
      price: price,
      summary: summary,
      imageUrl: imageUrl
    };

    var data = _menuData.default.push(newlyCreatedMenu);

    if (data) {
      return res.status(201).json({
        status: 201,
        message: "New menu has been added",
        data: [newlyCreatedMenu]
      });
    }

    return res.status(500).json({
      status: 500,
      message: "could not save your data"
    });
  }
};
var _default = MenuController;
exports.default = _default;