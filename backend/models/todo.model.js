const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  uid: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("todo", taskSchema);
