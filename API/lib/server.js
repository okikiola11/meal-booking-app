"use strict";

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.port || 3000;

_index.default.listen(PORT, function () {
  console.log(" Server is running on PORT: ".concat(PORT));
});