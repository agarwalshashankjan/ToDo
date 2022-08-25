let tasks = [];
const task = require("../models/task");
module.exports.Home = function (req, res) {
  console.log("searching data.....................");
  task.find({}, function (err, data) {
    if (err) {
      console.log("Error occured: ", err);
      return;
    }
    console.log("got my data.....................");
    tasks = data;
    res.render("home", {
      title: "ToDo App Home",
      data: tasks,
    });
  });
};

module.exports.Create = function (req, res) {
  console.log("Creating.....................");
  let description = req.body.description;
  let category = req.body.category;
  let dueDate = req.body.due_date;
  if (description) {
    task.create(
      {
        description,
        category,
        dueDate,
      },
      function (err, data) {
        if (err) {
          console.log("Error Occured: ", err);
          return;
        }
        console.log("Task created: ", data);
        console.log("Done creating.....................");
        res.redirect("/");
      }
    );
  }
};

module.exports.Delete = function (req, res) {
  let list = [];
  list = [req.body.list];
  console.log("list of ids: ", list);
  list.forEach((id) => {
    console.log("ID: ", id);
    task.findByIdAndDelete(id, function (err) {
      if (err) {
        console.log("Error in deleting Task: ", err);
        return;
      }
    });
  });
  res.redirect("back");
};
