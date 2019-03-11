export default (sequelize, Datatypes) => {
  const Menu = sequelize.define('menus', {
    menuId: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    menuType: {
      type: Datatypes.STRING,
    },
    meal: {
      type: Datatypes.STRING,
    },
    size: {
      type: Datatypes.STRING,
    },
    price: {
      type: Datatypes.INTEGER,
    },
    summary: Datatypes.TEXT,
    imageUrl: {
      type: Datatypes.TEXT,
    },
    mealId: {
      type: Datatypes.INTEGER,
    },
  });

  Menu.associate = (models) => {
    Menu.hasMany(models.Meal, {
      foreignkey: 'mealId',
    });

    Menu.belongsToMany(models.Order, {
      through: 'order',
      foreignkey: 'orderId',
    });
  };

  return Menu;
};
