"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _expressValidator = _interopRequireDefault(require("express-validator"));

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));

var _mealRoutes = _interopRequireDefault(require("./routes/mealRoutes"));

var _menuRoutes = _interopRequireDefault(require("./routes/menuRoutes"));

var _orderRoutes = _interopRequireDefault(require("./routes/orderRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.json());
app.use((0, _expressValidator.default)());
app.get('/', function (req, res) {
  return res.send('Welcome, to the Meal Booking Application!');
}); // app.use('/api/v1/users', userRoutes);

app.use('/api/v1/meals', _mealRoutes.default);
app.use('/api/v1/menu', _menuRoutes.default);
app.use('/api/v1/order', _orderRoutes.default);
app.use('/api/v1/auth', _userRoutes.default);
app.all('*', function (req, res) {
  res.status(404).json({
    status: 404,
    message: 'The endpoint you have requested does not exist on this server'
  });
});
var _default = app;
exports.default = _default;