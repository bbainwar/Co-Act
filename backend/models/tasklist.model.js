const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const TaskListSchema = new Schema({
    taskId:  { type: Schema.Types.ObjectId, ref: 'task', required: true },
    projectName: {
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
        required: true
    },
    cospacename: {
        type: String,
        required : true
    }
});

module.exports = TaskList = mongoose.model('taskList', TaskListSchema);