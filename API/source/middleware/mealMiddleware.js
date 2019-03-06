const MealMiddleware = {
  addAMeal(req, res, next) {
    if (req.user.isAdmin === false) {
      return res.status(403).json({
        status: 403,
        message: 'Cannot add a meal'
      });
    }
    next();
  },

  fetchAllMeals(req, res, next) {
    if (req.user.isAdmin === false) {
      return res.status(403).json({
        status: 403,
        message: 'Cannot grant access to fecth all meals'
      });
    }
    next();
  },

  getSingleMeal(req, res, next) {
    if (req.user.isAdmin === false) {
      return res.status(403).json({
        status: 403,
        message: 'Access denied to get single meal'
      });
    }
    next();
  },

  updateAMeal(req, res, next) {
    if (req.user.isAdmin === false) {
      return res.status(403).json({
        status: 403,
        message: 'Access denied to update meal'
      });
    }
    next();
  },

  deleteMeal(req, res, next) {
    if (req.user.isAdmin === false) {
      return res.status(403).json({
        status: 403,
        message: 'Cannot delete meal'
      });
    }
    next();
  }
};

export default MealMiddleware;
