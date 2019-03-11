"use strict";

var _index = _interopRequireDefault(require("./index"));

var _index2 = _interopRequireDefault(require("./model/index"));

var _seed = _interopRequireDefault(require("./seeders/seed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;

_index2.default.sequelize.sync().then(function () {
  (0, _seed.default)();

  _index.default.listen(port, function () {
    console.log(" Server is running on PORT: ".concat(port));
  });
}).catch(function (error) {
  console.log(error);
});