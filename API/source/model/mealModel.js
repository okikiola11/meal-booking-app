export default (sequelize, Datatypes) => {
  const Meal = sequelize.define('meals', {
    mealId: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
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
    }
  });

  Meal.associate = models => {
    Meal.belongsToMany(models.Order, {
      through: 'meal',
      foreignkey: 'orderId'
    });
    Meal.belongsToMany(models.Menu, {
      through: 'menu',
      foreignkey: 'menuId'
    });
  };

  return Meal;
};
