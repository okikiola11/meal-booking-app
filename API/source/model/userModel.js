export default (sequelize, Datatypes) => {
  const User = sequelize.define('users', {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Datatypes.STRING,
      unique: true,
      allowNull: false,
    },
    email: {
      type: Datatypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    isAdmin: {
      type: Datatypes.BOOLEAN,
      defaultValue: false,
    },
    password: {
      type: Datatypes.STRING,
      allowNull: false,
    },

  });

  User.associate = (models) => {
    // 1 to many with menu
    User.belongsToMany(models.Menu, {
      through: 'menuModel',
      foreignkey: 'owner', // userID
    });
    // 1 to many with meal
    User.belongsToMany(models.Meal, {
      through: 'mealModel',
      foreignkey: 'userId', // userID
    });
    // 1 to Many with order
    User.belongsToMany(models.Order, {
      through: 'orderModel',
      foreignkey: 'userId',
    });
  };

  return User;
};