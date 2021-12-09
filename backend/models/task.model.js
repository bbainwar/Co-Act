const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
  cospaceName: {
    type: String,
  },
  task: {
    type: String,
  },
  taskNotes: {
    type: String,
  },
  taskStatus: {
    type: String,
    required: true,
  },
  assignedBy: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
});
module.exports = Task = mongoose.model("task", TaskSchema);
