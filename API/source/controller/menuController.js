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

    const newlyCreatedMenu = {
      id: menuData[menuData.length - 1].id + 1,
      menuType,
      meal,
      size,
      price,
      summary,
      imageUrl
    };

    const data = menuData.push(newlyCreatedMenu);

    if (data) {
      return res.status(201).json({
        status: 201,
        message: "New menu has been added",
        data: [newlyCreatedMenu]
      });
    }

    return res.status(500).json({
      status: 500,
      message: "could not save your data"
    });
  }
};

export default MenuController;
