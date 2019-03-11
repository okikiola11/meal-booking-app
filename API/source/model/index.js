import Sequelize from 'sequelize';

const sequelize = new Sequelize('bookmeal', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

const models = {
  User: sequelize.import('./userModel'),
  Meal: sequelize.import('./mealModel'),
  Menu: sequelize.import('./menuModel'),
  Order: sequelize.import('./orderModel'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
