const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  discription: {
    type: String,
    required: true,
  },
  media: {
    type: String,
    required: true,
  },
  targetDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});
module.exports = new mongoose.model("Todo", todoSchema);
