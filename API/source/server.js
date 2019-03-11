import app from './index';
import models from './model/index';
import Seed from './seeders/seed';

const port = process.env.PORT || 3000;

models.sequelize
  .sync()
  .then(() => {
    Seed();
    app.listen(port, () => {
      console.log(` Server is running on PORT: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
