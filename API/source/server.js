import app from './index';
import models from './models/index';

const PORT = process.env.port || 3000;

models.sequelize
  .sync()
  .then(() => {
    models.User.create({
        username: 'kikiolla1',
        email: 'okikiola.apelehin22@gmail.com',
        password: 'okikiola123'
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      }),
      models.Meal.create({
        name: 'Rice with beef',
        size: 'medium',
        price: 1500,
        summary: 'Rice belongs to the carbohydrate family',
        imageUrl: 'meal1.jpg'
      })
      .then(() => {
        console.log('Success');
      })
      .catch(error => {
        console.log(error);
      }),
      models.Menu.create({
        menuType: 'Special',
        meal: 'Rice with beef',
        size: 'medium',
        price: 1500,
        summary: 'Rice belongs to the carbohydrate family',
        imageUrl: 'meal1.jpg',
        mealId: 1
      })
      .then(() => {
        console.log('Success');
      })
      .catch(error => {
        console.log(error);
      }),
      models.Order.create({
        username: 'Apelehin Okikiola',
        email: 'shade23@gmail.com',
        phoneNumber: '080231',
        meal: 'Rice with beef',
        size: 'medium',
        price: 1500,
        expirydate: '2016-04-25 14:35:58',
        userId: 1,
        mealId: 1
      })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      }),
      app.listen(PORT, () => {
        console.log(` Server is running on PORT: ${PORT}`);
      });
  })
  .catch(error => {
    console.log(error);
  });