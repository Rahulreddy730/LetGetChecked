const express = require("express");
const cors = require("cors");

const app = express();
var corsOption = {
  origin: ["http://localhost:4200", "http://localhost:4000"],
};
app.use(cors(corsOption));

app.get("/", function (req, res) {
  res.send("home");
});

app.listen(5000, () => {
  console.log("Server is Started");
});

require("./articles")(app);
