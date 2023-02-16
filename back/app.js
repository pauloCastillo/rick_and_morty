const express = require("express");
const app = express();

const router = require("./routes/characters");

const port = 3001;

app.use("/home", router);

app.listen(port, () =>
  console.log("Server is running on http://localhost:" + port)
);
