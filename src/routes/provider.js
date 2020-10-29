const router = require("express").Router();
const {
  checkInProvider,
  logInProvider,
  getProvider,
  getProviders,
  deleteProvider,
  updateProvider,
} = require("../controllers/provider.controller");

router.route("/").get(getProviders);
router.route("/:id").get(getProvider);
router.route("/actualizar/:id").put(updateProvider);
router.route("/registro").post(checkInProvider);
router.route("/ingreso").post(logInProvider);

module.exports = router;
