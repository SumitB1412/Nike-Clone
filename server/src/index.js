const express = require("express");
const userRouter = require("./routes/user.routes");

const app = express();
app.use(express.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Homepage");
});

module.exports = app;
