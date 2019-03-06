import models from '../models/index';

const orderController = {
  fetchAllOrder(req, res) {
    return models.Order.findAll()
      .then(orders => {
        res.status(200).json({
          status: 200,
          data: orders
        });
      })
      .catch(() => {
        res.status(404).json({
          status: 404,
          message: 'Cannot fetch all order'
        });
      });
  },

  addAnOrder(req, res) {
    const { username, email, phoneNumber, name, size, price } = req.body;

    return models.Order.create({
      username,
      email,
      phoneNumber,
      name,
      size,
      price
    })
      .then(orders => {
        res.status(201).json({
          status: 201,
          message: 'New order has been added',
          data: orders
        });
      })
      .catch(() => {
        res.status(500).json({
          status: 500,
          message: 'something went wrong while trying to save your order'
        });
      });
  },

  getSingleOrder(req, res) {
    const orderId = parseInt(req.params.id, 10);

    return models.Menu.findById(orderId)
      .then(orders => {
        res.status(200).json({
          status: 200,
          message: 'Order has been retrieved successfully',
          data: orders
        });
      })
      .catch(() => {
        res.status(404).json({
          status: 404,
          message: 'Order does not exist'
        });
      });
  },

  modifyAnOrder(req, res) {
    return models.Order.find({
      where: {
        orderId: parseInt(req.params.id, 10)
      }
    }).then(orders => {
      if (!orders) {
        return res.status(404).send({
          status: 404,
          error: 'Order Id not found'
        });
      }
      return orders
        .update({
          username: req.body.username || orders.username,
          email: req.body.email || orders.email,
          phoneNumber: req.body.phoneNumber || orders.phoneNumber,
          name: req.body.name || orders.name,
          size: req.body.size || orders.size,
          price: req.body.price || orders.price
        })
        .then(orders => {
          res.status(200).json({
            status: 200,
            message: 'Order has been successfully modified',
            data: orders
          });
        })
        .catch(() => {
          res.status(404).json({
            status: 404,
            error: 'Order Id not found'
          });
        });
    });
  }
};

export default orderController;
