import bcrypt from 'bcryptjs';
import models from '../model/index';

const Seed = () => {
  models.User.create({
    username: 'kikiolla1',
    email: 'admin.admin@gmail.com',
    password: bcrypt.hashSync('admin123', bcrypt.genSaltSync(8)),
    isAdmin: true, // is an Admin
  })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  models.Meal.create({
    name: 'Rice with beef',
    size: 'medium',
    price: 1500,
    summary: 'Rice belongs to the carbohydrate family',
    imageUrl: 'meal1.jpg',
  })
    .then(() => {
      // console.log('Success');
    })
    .catch((error) => {
      // console.log(error);
    });

  models.Menu.create({
    menuType: 'Special',
    meal: 'Rice with beef',
    size: 'medium',
    price: 1500,
    summary: 'Rice belongs to the carbohydrate family',
    imageUrl: 'meal1.jpg',
    mealId: 1,
  })
    .then(() => {
      // console.log('Success');
    })
    .catch((error) => {
      console.log(error);
    });

  models.Order.create({
    username: 'Apelehin Okikiola',
    email: 'shade23@gmail.com',
    phoneNumber: '080231',
    meal: 'Rice with beef',
    size: 'medium',
    price: 1500,
    expirydate: '2016-04-25 14:35:58',
    userId: 1,
    mealId: 1,
  })
    .then((result) => {
      // console.log(result);
    })
    .catch((error) => {
      // console.log(error);
    });
};

export default Seed;
