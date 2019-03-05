export default (sequelize, Datatypes) => {
  const Order = sequelize.define('orders', {
    orderId: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Datatypes.STRING
    },
    email: {
      type: Datatypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phoneNumber: {
      type: Datatypes.STRING
    },
    size: {
      type: Datatypes.STRING
    },
    price: {
      type: Datatypes.INTEGER
    },
    userId: {
      type: Datatypes.INTEGER
    },
    mealId: {
      type: Datatypes.INTEGER
    }
  });

  Order.associate = (models) => {
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