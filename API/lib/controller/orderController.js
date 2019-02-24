"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _orderData = _interopRequireDefault(require("../utils/orderData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var orderController = {
  fetchAllOrder: function fetchAllOrder(req, res) {
    return res.status(200).json({
      status: 200,
      data: _orderData.default
    });
  },
  addAnOrder: function addAnOrder(req, res) {
    var _req$body = req.body,
        menuType = _req$body.menuType,
        meal = _req$body.meal,
        size = _req$body.size,
        order = _req$body.order,
        price = _req$body.price,
        customerEmail = _req$body.customerEmail,
        imageUrl = _req$body.imageUrl;
    var newlyCreatedOrder = {
      id: _orderData.default[_orderData.default.length - 1].id + 1,
      menuType: menuType,
      meal: meal,
      size: size,
      order: order,
      price: price,
      customerEmail: customerEmail,
      imageUrl: imageUrl
    };
    var oldOrderLength = _orderData.default.length;

    _orderData.default.push(newlyCreatedOrder);

    var newOrderLength = _orderData.default.length;

    if (newOrderLength > oldOrderLength) {
      return res.status(201).json({
        status: 201,
        message: 'New order has been added',
        data: [newlyCreatedOrder]
      });
    }

    return res.status(500).json({
      status: 500,
      message: 'something went wrong while trying to save your order'
    });
  },
  modifyAnOrder: function modifyAnOrder(req, res) {
    var id = parseInt(req.params.id, 10);
    var orderFound;
    var orderIndex;

    _orderData.default.map(function (orderData, index) {
      if (orderData.id === id) {
        orderFound = orderData;
        orderIndex = index;
      }
    });

    if (orderFound === undefined || orderFound === null) {
      return res.status(404).send({
        status: 404,
        error: 'Order Id not found'
      });
    }

    var updatedOrder = {
      id: orderFound.id,
      menuType: req.body.menuType || orderFound.menuType,
      meal: req.body.meal || orderFound.meal,
      size: req.body.size || orderFound.size,
      order: req.body.order || orderFound.order,
      price: req.body.price || orderFound.price,
      customerEmail: req.body.customerEmail || orderFound.customerEmail,
      imageUrl: req.body.imageUrl || orderFound.imageUrl
    };

    _orderData.default.splice(orderIndex, 1, updatedOrder);

    return res.status(200).send({
      status: 200,
      message: 'Order has been successfully modified',
      data: [updatedOrder]
    });
  }
};
var _default = orderController;
exports.default = _default;