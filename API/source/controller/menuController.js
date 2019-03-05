import models from '../models/index';

const MenuController = {

  fetchAllMenu(req, res) {
    return models.Menu
      .findAll()
      .then((menus) => {
        res.status(200)
          .json({
            status: 200,
            data: menus,
          });
      })
      .catch(() => {
        res.status(404)
          .json({
            status: 404,
            message: 'Cannot fetch all menu',
          });
      });
  },

  addAMenu(req, res) {
    const {
      menuType,
      meal,
      size,
      price,
      summary,
      imageUrl,
    } = req.body;

    return models.Menu.create({
        menuType,
        meal,
        size,
        price,
        summary,
        imageUrl,
      })
      .then((menus) => {
        res.status(201)
          .json({
            status: 201,
            message: 'New menu has been added',
            data: menus,
          });
      })
      .catch(() => {
        res.status(500)
          .json({
            status: 500,
            message: 'could not save your data',
          });
      });
  },
};

export default MenuController;