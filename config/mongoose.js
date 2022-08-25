const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todo");

const db = mongoose.connection;

db.on(
  "error",
  console.error.bind(console, "Error Connecting the database mongoDB")
);

db.once("open", function () {
  console.log("successfully connected to DB");
});

module.exports.db;
