const express = require("express");
const port = 8000;
const app = express();
app.use(express.static("./assets"));
app.use("/", require("./routes"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.get("/", function (req, res) {
  res.render("home");
});
app.listen(port, function (err) {
  if (err) {
    console.log("Error starting the server");
  }
  console.log(`Server started at port ${port}`);
});
