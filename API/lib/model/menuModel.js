"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(sequelize, Datatypes) {
  var Menu = sequelize.define('menus', {
    menuId: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    menuType: {
      type: Datatypes.STRING
    },
    meal: {
      type: Datatypes.STRING
    },
    size: {
      type: Datatypes.STRING
    },
    price: {
      type: Datatypes.INTEGER
    },
    summary: Datatypes.TEXT,
    imageUrl: {
      type: Datatypes.TEXT
    },
    mealId: {
      type: Datatypes.INTEGER
    }
  });

  Menu.associate = function (models) {
    Menu.hasMany(models.Meal, {
      foreignkey: 'mealId'
    });
    Menu.belongsToMany(models.Order, {
      through: 'order',
      foreignkey: 'orderId'
    });
  };

  return Menu;
};

exports.default = _default;