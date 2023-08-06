const getProducts = async (req, res) => {
  res.send("Products");
};

const addProducts = async (req, res) => {
  res.send("Product added");
};

module.exports = { getProducts, addProducts };
