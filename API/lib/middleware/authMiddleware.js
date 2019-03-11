"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FORMAT OF TOKEN
// Authorization: <access_token>
var authMiddleware = {
  verifyToken: function verifyToken(req, res, next) {
    // Get auth Header value
    var bearerHeader = req.headers.authorization;

    _jsonwebtoken.default.verify(bearerHeader, 'secretkey', function (err, authData) {
      if (err) {
        res.sendStatus(403);
      } else {
        var id = authData.id,
            isAdmin = authData.isAdmin;
        req.user = {
          isAdmin: isAdmin,
          id: id
        };
        next();
      }
    });
  }
};
var _default = authMiddleware;
exports.default = _default;