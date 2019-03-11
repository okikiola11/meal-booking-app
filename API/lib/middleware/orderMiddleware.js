"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var orderMiddleware = {
  fetchAllOrder: function fetchAllOrder(req, res, next) {
    if (req.user.isAdmin === false) {
      return res.status(403).json({
        status: 403,
        message: 'Access denied, must be logged in as an Admin'
      });
    }

    next();
  },
  getSingleOrder: function getSingleOrder(req, res, next) {
    if (req.user.isAdmin === false) {
      return res.status(403).json({
        status: 403,
        message: 'Access denied, must be logged in as an Admin'
      });
    }

    next();
  },
  addAnOrder: function addAnOrder(req, res, next) {
    if (req.user.isAdmin === true) {
      return res.status(403).json({
        status: 403,
        message: 'No longer available for the day'
      });
    }

    next();
  },
  modifyAnOrder: function modifyAnOrder(req, res) {
    if (req.user.isAdmin === true) {
      return res.status(403).json({
        status: 403,
        message: 'Access denied, must be logged in as a User'
      });
    }

    next();
  }
};
var _default = orderMiddleware;
exports.default = _default;