const Todo = require("../models/Todo");

const addTodo = async (req, res) => {
  try {
    const { title, status, discription, targetDate, fileName } = req.body;
    const todo = {
      title,
      status,
      discription,
      targetDate,
      media: fileName,
    };

    const addTodoNew = new Todo(todo);
    let response = await addTodoNew.save();
    res.json({
      data: response,
      message: "Todo Added",
    });
  } catch (err) {
    console.log(err.message);
    res.json({
      message: err.message,
    });
  }
};
module.exports = addTodo;
