"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(sequelize, Datatypes) {
  var Order = sequelize.define('orders', {
    orderId: {
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
      type: Datatypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phoneNumber: {
      allowNull: false,
      type: Datatypes.STRING,
      not: ['[a-z]', 'i']
    },
    size: {
      allowNull: false,
      type: Datatypes.STRING
    },
    price: {
      allowNull: false,
      type: Datatypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: Datatypes.INTEGER
    },
    mealId: {
      allowNull: false,
      type: Datatypes.INTEGER
    }
  });

  Order.associate = function (models) {
    Order.belongsToMany(models.Meal, {
      through: 'order',
      foreignkey: 'mealId'
    });
    Order.belongsTo(models.User, {
      foreignkey: 'userId'
    });
  };

  return Order;
};

exports.default = _default;