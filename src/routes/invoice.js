const router = require("express").Router();
const {
  postInvoice,
  getInvoicesById,
  getInvoices,
} = require("../controllers/invoice.controller");

router.route("/").get(getInvoices);
router.route("/create").post(postInvoice);
router.route("/:id").get(getInvoicesById);


module.exports = router;
