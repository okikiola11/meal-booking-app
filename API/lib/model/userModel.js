"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(sequelize, Datatypes) {
  var User = sequelize.define('users', {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      allowNull: false,
      type: Datatypes.STRING
    },
    email: {
      allowNull: false,
      unique: true,
      type: Datatypes.STRING,
      validate: {
        isEmail: true
      }
    },
    isAdmin: {
      type: Datatypes.BOOLEAN,
      defaultValue: false
    },
    password: {
      allowNull: false,
      type: Datatypes.STRING
    }
  });

  User.associate = function (models) {
    // 1 to many with meal
    User.hasMany(models.Meal, {
      foreignkey: 'userId' // userID

    }); // 1 to Many with order

    User.hasMany(models.Order, {
      as: 'orders'
    });
  };

  return User;
};

exports.default = _default;