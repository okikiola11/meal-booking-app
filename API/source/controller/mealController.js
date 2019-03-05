import models from '../models/index';

const MealController = {
  addAMeal(req, res) {
    const {
      name,
      size,
      price,
      summary,
      imageUrl,
    } = req.body;

    return models.Meal.create({
        name,
        size,
        price,
        summary,
        imageUrl,
      })
      .then((meals) => {
        res.status(201)
          .json({
            status: 201,
            message: 'New meal has been added',
            data: meals,
          });
      })
      .catch(() => {
        res.status(500)
          .json({
            status: 500,
            message: 'something went wrong while trying to save your data',
          });
      });
  },

  fetchAllMeals(req, res) {
    return models.Meal
      .findAll()
      .then((meals) => {
        res.status(200)
          .json({
            status: 200,
            data: meals,
          });
      })
      .catch(() => {
        res.status(404)
          .json({
            status: 404,
            message: 'Cannot fetch all meal',
          });
      });
  },

  getSingleMeal(req, res) {
    const id = parseInt(req.params.id, 10);

    return models.Meal
      .findById(id)
      .then((meals) => {
        console.log(res.status);
        res.status(200)
          .json({
            status: 200,
            message: 'Meal has been retrieved successfully',
            data: meals,
          });
      })
      .catch(() => {
        res.status(404)
          .json({
            status: 404,
            message: 'Meal Id does not exist',
          });
      });
  },


  updateAMeal(req, res) {
    return models.Meal
      .find({
        where: {
          mealId: parseInt(req.params.id, 10),
        },
      })
      .then((meals) => {
        if (!meals) {
          return res.status(404).send({
            status: 404,
            error: 'record id not found',
          });
        }
        return meals
          .update({
            name: req.body.name || meals.name,
            size: req.body.size || meals.size,
            price: req.body.price || meals.price,
            summary: req.body.summary || meals.summary,
            imageUrl: req.body.imageUrl || meals.imageUrl,

          })
          .then((meals) => {
            res.status(200)
              .json({
                status: 200,
                message: 'Meal has been successfully updated',
                data: meals,
              });
          })
          .catch(() => {
            res.status(404)
              .json({
                status: 404,
                error: 'record id not found',
              });
          });
      });
  },

  deleteMeal(req, res) {
    return models.Meal
      .find({
        where: {
          mealId: parseInt(req.params.id, 10),
        },
      })
      .then((meals) => {
        if (!meals) {
          return res.status(404).send({
            status: 404,
            error: 'record id not found',
          });
        }

        return meals
          .destroy()
          .then((meals) => {
            res.status(200)
              .json({
                status: 200,
                message: 'Meal record deleted successfully',
                data: [],
              });
          })
          .catch(() => {
            res.status(404)
              .json({
                status: 404,
                error: 'Oooops! no record with such Id',
              });
          });
      });
  },


  //FORMAT OF TOKEN
  //Authorization: Bearer <access_token>
  verifyToken(req, res, next) {
    //Get auth Header value

    const bearerHeader = req.headers['authorization'];

    //Check if bearer is undefined
    if (typeof bearerHeader != 'undefined') {
      res.send("here");
    } else {
      //Forbidden
      res.sendStatus(403);
    }

  },

};

export default MealController;