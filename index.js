const express = require("express");
const port = 8000;
const app = express();
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./assets"));
app.use("/", require("./routes"));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log("Error starting the server");
  }
  console.log(`Server started at port ${port}`);
});
