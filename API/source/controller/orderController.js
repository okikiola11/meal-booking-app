import orderData from '../utils/orderData';

const orderController = {
  fetchAllOrder(req, res) {
    return res.status(200).json({
      status: 200,
      data: orderData,
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
      imageUrl,
    } = req.body;

    const newlyCreatedOrder = {
      id: orderData[orderData.length - 1].id + 1,
      menuType,
      meal,
      size,
      order,
      price,
      customerEmail,
      imageUrl,
    };

    const data = orderData.push(newlyCreatedOrder);

    return res.status(201).json({
      status: 201,
      message: 'New order has been added',
      data: [newlyCreatedOrder],
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
      error.mgs = 'Order Id not found';

      return res.status(404).send({
        status: 404,
        error,
      });
    }

    const updatedOrder = {
      id: orderFound.id,
      menuType: req.body.menuType || orderFound.menuType,
      meal: req.body.meal || orderFound.meal,
      size: req.body.size || orderFound.size,
      order: req.body.order || orderFound.order,
      price: req.body.price || orderFound.price,
      customerEmail: req.body.customerEmail || orderFound.customerEmail,
      imageUrl: req.body.imageUrl || orderFound.imageUrl,
    };

    orderData.splice(orderIndex, 1, updatedOrder);

    return res.status(200).send({
      status: 200,
      message: 'Order has been successfully modified',
      data: [updatedOrder],
    });
  },
};

export default orderController;
