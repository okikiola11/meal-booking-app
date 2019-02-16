import menuData from "../utils/menuData";

const MenuController = {
  fetchAllMenu(req, res) {
    return res.status(200).json({
      status: 200,
      data: menuData
    });
  },

  addAMenu(req, res) {
    const { menuType, meal, size, price, summary, imageUrl } = req.body;
    if (!req.body.menuType) {
      return res.status(400).send({
        success: 400,
        message: "Menu type is required"
      });
    }

    const newlyCreatedMenu = {
      id: menuData[menuData.length - 1].id + 1,
      menuType,
      meal,
      size,
      price,
      summary,
      imageUrl
    };

    const createData = menuData.push(newlyCreatedMenu);
    return res.status(201).json({
      status: 201,
      message: "New menu has been added",
      createData: [newlyCreatedMenu]
    });
  }
};

export default MenuController;
