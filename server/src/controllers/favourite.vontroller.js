const getFav = async (req, res) => {
  const { userID } = req.body;
  try {
    const favData = await FavouriteModel.find({ user: userID });
    res.status(200).json({ data: favData });
  } catch (error) {
    res.status(400).json({ error });
  }
};
const addToFav = async (req, res) => {
  try {
    const favData = await FavouriteModel(req.body);
    await favData.save();
    res.status(200).json({ msg: "Item added to Favourites" });
  } catch (error) {
    res.status(400).json({ error });
  }
};
const removeFav = async (req, res) => {
  try {
    const favData = await FavouriteModel.findByIdAndDelete({
      _id: req.body._id,
    });
    res.status(200).json({ msg: "Item removed from favourites" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = { addToFav, getFav, removeFav };
