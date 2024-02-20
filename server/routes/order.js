const express = require("express");

const { getAllOrders, addOrder } = require("../controllers/orderController");

const router = express.Router();

router.route("/").get(getAllOrders).post(addOrder);

module.exports = router;
