"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _menuController = _interopRequireDefault(require("../controller/menuController"));

var _authMiddleware = _interopRequireDefault(require("../middleware/authMiddleware"));

var _menuMiddleware = _interopRequireDefault(require("../middleware/menuMiddleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.use('/', _authMiddleware.default.verifyToken);
router.get('/', _menuMiddleware.default.fetchAllMenu, _menuController.default.fetchAllMenu);
router.get('/:id', _menuMiddleware.default.getSingleMenu, _menuController.default.getSingleMenu);
router.post('/', _menuMiddleware.default.addAMenu, _menuController.default.addAMenu);
var _default = router;
exports.default = _default;