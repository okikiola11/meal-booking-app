"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var MenuMiddleware = {
  fetchAllMenu: function fetchAllMenu(req, res, next) {
    if (req.user.isAdmin === true) {
      return res.status(403).json({
        status: 403,
        message: 'Access denied, must be logged in as a User'
      });
    }

    next();
  },
  getSingleMenu: function getSingleMenu(req, res, next) {
    if (req.user.isAdmin === true) {
      return res.status(403).json({
        status: 403,
        message: 'Access denied, must be logged in as a User'
      });
    }

    next();
  },
  addAMenu: function addAMenu(req, res, next) {
    if (req.user.isAdmin === false) {
      return res.status(403).json({
        status: 403,
        message: 'Access denied, must be logged in as an Admin'
      });
    }

    next();
  }
};
var _default = MenuMiddleware;
exports.default = _default;