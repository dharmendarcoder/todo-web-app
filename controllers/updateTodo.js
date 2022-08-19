const Todo = require("../models/Todo");
const updateTodo = async (req, res) => {
  try {
    const { _id } = req.params;
    const { todo } = req.body;
    let response = await Todo.findByIdAndUpdate({ _id }, todo);
    res.json({
      data: response,
      message: "todo Update",
    });
  } catch (err) {
    console.log(err.message);
    res.json({
      message: err.message,
    });
  }
};
module.exports = updateTodo;
