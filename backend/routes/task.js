const express = require("express");
const router = express.Router();
const Task = require("../models/task.model");

router.post("/add", (req, res) => {
  var taskObj = new Task(req.body);
  taskObj.save(function (err, task) {
    if (err) return res.status(400).json({ err: err });
    if (task) {
      return res.status(201).json({
        success: true,
        msg: "Task  Successfully Saved",
      });
    }
  });
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

router.get("/task-detail/:id", (req, res) => {
  Task.findById(req.params.id)
    .populate("userId")
    .exec(function (err, tasks) {
      if (err) return console.error(err);
      TaskList.find({ taskId: tasks._id }).exec(function (error, taskDetail) {
        if (error) return console.error(error);
        return res.status(200).json({
          success: true,
          msg: "Task details",
          tasks: tasks,
          taskDetails: taskDetail,
        });
      });
    });
});
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
