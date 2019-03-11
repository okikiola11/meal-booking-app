const orderMiddleware = {
  fetchAllOrder(req, res, next) {
    if (req.user.isAdmin === false) {
      return res.status(403).json({
        status: 403,
        message: 'Access denied, must be logged in as an Admin',
      });
    }
    next();
  },

  getSingleOrder(req, res, next) {
    if (req.user.isAdmin === false) {
      return res.status(403).json({
        status: 403,
        message: 'Access denied, must be logged in as an Admin',
      });
    }
    next();
  },

  addAnOrder(req, res, next) {
    if (req.user.isAdmin === true) {
      return res.status(403).json({
        status: 403,
        message: 'No longer available for the day',
      });
    }
    next();
  },

  modifyAnOrder(req, res) {
    if (req.user.isAdmin === true) {
      return res.status(403).json({
        status: 403,
        message: 'Access denied, must be logged in as a User',
      });
    }
    next();
  },
};

export default orderMiddleware;
