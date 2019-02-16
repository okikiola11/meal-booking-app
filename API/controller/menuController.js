import menuData from "../utils/menuData";

const MenuController = {
  fetchAllMenu(req, res) {
    return res.status(200).json({
      status: 200,
      data: menuData
    });
  }
};

export default MenuController;
