const express = require("express");
const router = express.Router();

const regForm = require("../controllers/reg-controller");
router.route("/reg").post(regForm);

 module.exports = router;