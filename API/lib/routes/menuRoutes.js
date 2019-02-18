"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _menuController = _interopRequireDefault(require("../controller/menuController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.get("/", _menuController.default.fetchAllMenu);
router.post("/", _menuController.default.addAMenu);
var _default = router;
exports.default = _default;