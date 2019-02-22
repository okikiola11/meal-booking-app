"use strict";

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;

_index.default.listen(port, function () {
  console.log(" Server is running on PORT: ".concat(port));
});