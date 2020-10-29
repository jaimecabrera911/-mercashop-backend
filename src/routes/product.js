const router = require("express").Router();
const { formData } = require("../utils/middlewares");

const {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
  saveReview,
} = require("../controllers/product.controller");

router.route("/").get(getProducts);
router.route("/:id").get(getProduct).delete(deleteProduct).put(updateProduct);
router.route("/:id/reviews").post(saveReview);
router.route("/crear").post(createProduct);
router.route("/actualizar/:id").put(updateProduct);

module.exports = router;
