const Todo = require("../models/Todo");
const deleteTodo = async (req, res) => {
  try {
    const { _id } = req.params;

    await Todo.deleteOne({ _id });
    res.json({
      message: "todo deleted",
    });
  } catch (err) {
    console.log(err.message);
    res.json({
      message: err.message,
    });
  }
};
module.exports = deleteTodo;
