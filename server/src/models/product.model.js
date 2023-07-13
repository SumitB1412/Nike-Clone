const { Schema, model } = require("mongoose");

const reqString = { type: String, required: true };
const reqNumber = { type: Number, required: true };
const reqArray = { type: Array, required: true };

const productSchema = new Schema(
  {
    title: reqString,
    gender: reqString,
    description: reqString,
    category: reqString,
    price: reqNumber,
    size: reqArray,
    color: reqString,
    rating: reqNumber,
    img: reqArray,
  },
  {
    versionKey: false,
  }
);

const ProductModel = model("product", productSchema);

module.exports = ProductModel;
