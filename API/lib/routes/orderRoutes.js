"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _orderController = _interopRequireDefault(require("../controller/orderController"));

var _authMiddleware = _interopRequireDefault(require("../middleware/authMiddleware"));

var _orderMiddleware = _interopRequireDefault(require("../middleware/orderMiddleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.use('/', _authMiddleware.default.verifyToken);
router.get('/', _orderMiddleware.default.fetchAllOrder, _orderController.default.fetchAllOrder);
router.get('/:id', _orderController.default.getSingleOrder);
router.post('/', _orderController.default.addAnOrder);
router.put('/:id', _orderController.default.modifyAnOrder);
var _default = router;
exports.default = _default;