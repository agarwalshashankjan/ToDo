let data = [];
module.exports.Home = function (req, res) {
  res.render("home", {
    title: "ToDo App Home",
    data,
  });
};

module.exports.Create = function (req, res) {
  let description = req.body.description;
  let category = req.body.category;
  let dueDate = req.body.due_date;
  if (description) {
    data.push({
      description,
      category,
      dueDate,
    });
  }
  res.redirect("/");
};

module.exports.Delete = function (req, res) {
  let list = req.body.list;
  data = data.filter((item) => !list.includes(item.description));
  res.redirect("/");
};
