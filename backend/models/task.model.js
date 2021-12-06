const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const TaskSchema = new Schema({
    //userId:  { type: Schema.Types.ObjectId, ref: 'users', required: true },
    // date: {
    //     type: Date,
    //     required: true,
    // },
    // descripition: {
    //     type: String,
    // },
    // createdDate: {
    //     type: Date,
    //     default: Date.now
    // },
    // updatedDate: {
    //     type: Date,
    //     default: null
    // },
    // deletedDate: {
    //     type: Date,
    //     default: null
    // }

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
        required: true
    },
    assignedBy: {
        type: String,
        required: true
    },
    uid: {
        type: String,
        required: true
    }
});
module.exports = Task = mongoose.model('task', TaskSchema);