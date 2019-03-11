"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("../model/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var orderController = {
  fetchAllOrder: function fetchAllOrder(req, res) {
    return _index.default.Order.findAll().then(function (orders) {
      res.status(200).json({
        status: 200,
        data: orders
      });
    }).catch(function () {
      res.status(404).json({
        status: 404,
        message: 'Cannot fetch all order'
      });
    });
  },
  addAnOrder: function addAnOrder(req, res) {
    var _req$body = req.body,
        username = _req$body.username,
        email = _req$body.email,
        phoneNumber = _req$body.phoneNumber,
        name = _req$body.name,
        size = _req$body.size,
        price = _req$body.price;
    return _index.default.Order.create({
      username: username,
      email: email,
      phoneNumber: phoneNumber,
      name: name,
      size: size,
      price: price
    }).then(function (orders) {
      res.status(201).json({
        status: 201,
        message: 'New order has been added',
        data: orders
      });
    }).catch(function () {
      res.status(500).json({
        status: 500,
        message: 'something went wrong while trying to save your order'
      });
    });
  },
  getSingleOrder: function getSingleOrder(req, res) {
    var orderId = parseInt(req.params.id, 10);
    return _index.default.Menu.findById(orderId).then(function (orders) {
      res.status(200).json({
        status: 200,
        message: 'Order has been retrieved successfully',
        data: orders
      });
    }).catch(function () {
      res.status(404).json({
        status: 404,
        message: 'Order does not exist'
      });
    });
  },
  modifyAnOrder: function modifyAnOrder(req, res) {
    return _index.default.Order.find({
      where: {
        orderId: parseInt(req.params.id, 10)
      }
    }).then(function (orders) {
      if (!orders) {
        return res.status(404).send({
          status: 404,
          error: 'Order Id not found'
        });
      }

      return orders.update({
        username: req.body.username || orders.username,
        email: req.body.email || orders.email,
        phoneNumber: req.body.phoneNumber || orders.phoneNumber,
        name: req.body.name || orders.name,
        size: req.body.size || orders.size,
        price: req.body.price || orders.price
      }).then(function (orders) {
        res.status(200).json({
          status: 200,
          message: 'Order has been successfully modified',
          data: orders
        });
      }).catch(function () {
        res.status(404).json({
          status: 404,
          error: 'Order Id not found'
        });
      });
    });
  }
};
var _default = orderController;
exports.default = _default;