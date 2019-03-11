"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _index = _interopRequireDefault(require("../model/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserController = {
  signupAUser: function signupAUser(req, res) {
    var _req$body = req.body,
        username = _req$body.username,
        email = _req$body.email;

    var hashedPassword = _bcryptjs.default.hashSync(req.body.password, _bcryptjs.default.genSaltSync(8));

    var isAdmin = false;
    return _index.default.User.create({
      username: username,
      email: email,
      password: hashedPassword,
      isAdmin: isAdmin
    }).then(function (user) {
      var token = _jsonwebtoken.default.sign({
        id: user.id
      }, 'secretkey', {
        expiresIn: 86400 // expires cmdin 24hours

      });

      return res.status(201).json({
        status: 201,
        message: 'New User has been created',
        data: [{
          auth: 'true',
          token: token
        }]
      });
    }).catch(function () {
      return res.status(500).json({
        status: 500,
        message: 'something went wrong while trying to create a user'
      });
    });
  },
  // loginUsers(req, res) {
  //   // Dummy user
  //   const user = {
  //     id: 1,
  //     username: 'okiki',
  //     email: 'okikiola,apelehin@gmail.com',
  //     isAdmin: true
  //   };
  //   jwt.sign({
  //       user
  //     },
  //     'secretkey',
  //     (err, token) => {
  //       res.json({
  //         token
  //       });
  //     }
  //   );
  // },
  loginUsers: function loginUsers(req, res) {
    var email = req.body.email;

    _index.default.User.findOne({
      where: {
        email: email
      }
    }).then(function (user) {
      if (!user) return res.status(404).send('No user found.');

      var passwordIsValid = _bcryptjs.default.compareSync(req.body.password, user.password);

      if (!passwordIsValid) {
        return res.status(401).json({
          auth: 'false',
          message: 'Incorrect Password'
        });
      }

      var token = _jsonwebtoken.default.sign({
        id: user.id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin
      }, 'secretkey', {
        expiresIn: 86400 // expires in 24hours

      });

      return res.status(200).json({
        status: 200,
        message: "Welcome ".concat(user.email, ", you have successfully logged in"),
        data: [{
          auth: 'true',
          token: token,
          user: user
        }]
      });
    }).catch(function () {
      res.status(404).json({
        status: 404,
        message: 'User record does not exist'
      });
    });
  }
};
var _default = UserController;
exports.default = _default;