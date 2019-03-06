const MenuMiddleware = {
  fetchAllMenu(req, res, next) {
    if (req.user.isAdmin === true) {
      return res.status(403).json({
        status: 403,
        message: 'Access denied, must be logged in as a User'
      });
    }
    next();
  },

  getSingleMenu(req, res, next) {
    if (req.user.isAdmin === true) {
      return res.status(403).json({
        status: 403,
        message: 'Access denied, must be logged in as a User'
      });
    }
    next();
  },

  addAMenu(req, res, next) {
    if (req.user.isAdmin === false) {
      return res.status(403).json({
        status: 403,
        message: 'Access denied, must be logged in as an Admin'
      });
    }
    next();
  }
};

export default MenuMiddleware;
