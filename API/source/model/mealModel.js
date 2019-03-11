export default (sequelize, Datatypes) => {
  const Meal = sequelize.define('meals', {
    mealId: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      allowNull: false,
      unique: true,
      type: Datatypes.STRING,
    },
    size: {
      allowNull: false,
      type: Datatypes.STRING,
    },
    price: {
      allowNull: false,
      type: Datatypes.INTEGER,
    },
    summary: {
      allowNull: false,
      type: Datatypes.TEXT,
    },
    imageUrl: {
      allowNull: false,
      type: Datatypes.TEXT,
    },
  });

  Meal.associate = (models) => {
    Meal.belongsToMany(models.Order, {
      through: 'meal',
      foreignkey: 'orderId',
    });
    Meal.belongsToMany(models.Menu, {
      through: 'menu',
      foreignkey: 'menuId',
    });
  };

  return Meal;
};
