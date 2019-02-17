import orderData from "../utils/orderData";

const orderController = {
  fetchAllOrder(req, res) {
    return res.status(200).json({
      status: 200,
      data: orderData
    });
  },

  addAnOrder(req, res) {
    const {
      menuType,
      meal,
      size,
      order,
      price,
      customerEmail,
      imageUrl
    } = req.body;

    const newlyCreatedOrder = {
      id: orderData[orderData.length - 1].id + 1,
      menuType,
      meal,
      size,
      order,
      price,
      customerEmail,
      imageUrl
    };

    const createOrder = orderData.push(newlyCreatedOrder);

    return res.status(201).json({
      status: 201,
      message: "New order has been added",
      createOrder: [newlyCreatedOrder]
    });
  },

  modifyAnOrder(req, res) {
    const id = parseInt(req.params.id, 10);

    let orderFound;
    let orderIndex;
    orderData.map((orderData, index) => {
      if (orderData.id === id) {
        orderFound = orderData;
        orderIndex = index;
      }
    });

    if (orderFound === undefined || orderFound === null) {
      const error = {};
      error.mgs = "Order Id not found";

      return res.status(404).send({
        status: 404,
        error
      });
    }

    const updatedOrder = {
      id: orderFound.id,
      menuType: req.body.menuType || mealFound.menuType,
      meal: req.body.meal || mealFound.meal,
      size: req.body.size || mealFound.size,
      order: req.body.order || mealFound.order,
      price: req.body.price || mealFound.price,
      customerEmail: req.body.customerEmail || mealFound.customerEmail,
      imageUrl: req.body.imageUrl || mealFound.imageUrl
    };

    orderData.splice(orderIndex, 1, updatedOrder);

    return res.status(201).send({
      success: 200,
      message: "Order has been successfully modified",
      updatedOrder
    });
  }
};

export default orderController;
