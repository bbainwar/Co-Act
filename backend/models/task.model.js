const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
  uid: { type: String, required: true },
  date: {
    type: Date,
    required: true,
  },
  descripition: {
    type: String,
  },
//   createdDate: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedDate: {
//     type: Date,
//     default: null,
//   },
//   deletedDate: {
//     type: Date,
//     default: null,
//   },
  cospacename: {
    type: String,
    required: true,
  },
});
module.exports = Task = mongoose.model("task", TaskSchema);
