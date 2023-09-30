const { Router } = require("express");
const FavouriteModel = require("../models/favourite.model");
const {
  getFav,
  addToFav,
  removeFav,
} = require("../controllers/favourite.vontroller");

const favouriteRouter = Router();

favouriteRouter.get("/get-favourites", getFav);

favouriteRouter.post("/add-to-favourites", addToFav);

favouriteRouter.delete("/remove-from-favourites", removeFav);

module.exports = favouriteRouter;
