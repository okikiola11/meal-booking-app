import orderData from "../utils/orderData";

const orderController = {
  fetchAllOrder(req, res) {
    return res.status(200).json({
      status: 200,
      data: orderData
    });
  }
};

export default orderController;
