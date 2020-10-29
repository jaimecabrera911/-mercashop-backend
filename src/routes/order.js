const router = require("express").Router();
const {
  getOrder,
  getOrders,
  getOrdersSaved,
  getOrdersPayed,
  postOrder,
  deleteOrder,
  payOrder,
  getMyOrders
} = require("../controllers/order.controller");

router.route("/").get(getOrders).post(postOrder);
router.route("/saved/:id").get(getOrdersSaved);
router.route("/payed/:id").get(getOrdersPayed);
router.route("/create").post(postOrder);
router.route("/:id").delete(deleteOrder);
router.route("/:id/pay").put(payOrder);
router.route("/my-orders/:id").get(getMyOrders);

module.exports = router;