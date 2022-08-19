const router = require("express").Router();
const addTodo = require("../controllers/addTodo");
const getTodo = require("../controllers/getTodo");
const deleteTodo = require("../controllers/deleteTodo");
const updateTodo = require("../controllers/updateTodo");
const uploadFile = require("../Middleware/filesave");
//get Todos
router.get("/get/todo", getTodo);

//Add new todo
router.post("/add/todo", uploadFile, addTodo);

//update todo by id
router.put("/update/todo/:_id", updateTodo);

//Delete todo by id
router.get("/delete/todo/:_id", deleteTodo);

module.exports = router;
