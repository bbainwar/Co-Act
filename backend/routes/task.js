const express = require('express');
const router = express.Router();
const Task = require('../models/task.model');
const TaskList = require('../models/tasklist.model');

router.post('/add', (req, res) => {

	//var taskObj = new Task({ date: req.body.formData.date, descripition: req.body.formData.description,cospacename: req.body.cospacename });
	var taskObj = new Task({ uid: req.body.uid, date: req.body.formData.date, descripition: req.body.formData.description,cospacename: req.body.cospace });
	taskObj.save(function (err, task) {
		if (err) return res.status(400).json({ err: err })
		if (task) {
			req.body.formData.taskList.map((taskList, index) => {
				var taskListObj = new TaskList({
					//userId: JSON.parse(req.body.userData)._id,
					taskId: task._id,
					projectName: taskList.projectName,
					task: taskList.task,
					taskNotes: taskList.taskNotes,
					taskStatus: taskList.taskStatus,
					cospacename: req.body.cospacename
				});
				taskListObj.save((error, savedTask) => {
					if (err) {
						taskObj.deleteOne({ _id: task._id }, function (err) {
							return res.status(400).json({ err: error });
						});
						taskListObj.deleteOne({ taskId: task._id }, function (err) {
							return res.status(400).json({ err: error });
						});
						return res.status(400).json({ err: error });
					}

				})
			})
			return res.status(201).json({
				success: true,
				msg: "Task  Successfully Saved",
			});
		}
	});
});
router.get('/task',(req,res)=>{
	Task.find().populate('userId').exec(function (err, tasks) {
		if (err) return console.error(err);
        return res.status(200).json({
            success: true,
            msg: "Task Listed",
			tasks: tasks,
        });
    });
});
router.get('/task-detail/:id',(req,res)=>{
	Task.findById(req.params.id).populate('userId').exec(function (err, tasks) {
		if (err) return console.error(err);
		TaskList.find({taskId:tasks._id}).exec(function(error,taskDetail){
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
module.exports = router;