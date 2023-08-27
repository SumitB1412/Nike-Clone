const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
const productRouter = require("./routes/product.routes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.send("Homepage");
});

module.exports = app;
