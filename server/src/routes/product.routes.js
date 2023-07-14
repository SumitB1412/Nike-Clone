const { Router } = require("express");
const {
  getProducts,
  addProducts,
} = require("../controllers/product.controller");

const productRouter = Router();

productRouter.get("/get-product", getProducts);
productRouter.post("/add-product", addProducts);

module.exports = productRouter;
