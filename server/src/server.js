const server = require("./index");
const connection = require("./configs/db");

server.listen(7000, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
  console.log("Server is running on PORT 7000");
});
