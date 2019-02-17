import orderData from "../utils/orderData";

const orderController = {
  fetchAllOrder(req, res) {
    return res.status(200).json({
      status: 200,
      data: orderData
    });
  },

  addAnOrder(req, res) {
    const { menuType, meal, size, order, price, customerEmail, imageUrl } = req.body;

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
  }


};

export default orderController;
