const { Router } = require("express");
const { getOrders, postOrders } = require("../controllers/order.controller");
const validation = require("../middlewares/auth.middleware");

const orderRouter = Router();

orderRouter.post("/post-orders", validation, postOrders);
orderRouter.get("/get-orders", validation, getOrders);

module.exports = orderRouter;
