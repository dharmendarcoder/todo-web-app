const Todo = require("../models/Todo");
const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json({
      data: todos,
      message: "all todos ",
    });
  } catch (err) {
    console.log(err.message);
    res.json({
      message: err.message,
    });
  }
};
module.exports = getTodo;
