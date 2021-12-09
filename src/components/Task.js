import React from "react";
import axios from "axios";
import {
  addTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../services/taskServices1";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { StylesProvider } from "@material-ui/styles";
class Task extends React.Component {
  state = {
    assignedBy: JSON.parse(localStorage.getItem("user")).displayName,
    uid: JSON.parse(localStorage.getItem("user")).id,
    cospaceName: localStorage.getItem("recent_cospace_clicked"),
    task: "",
    taskNotes: "",
    taskStatus: "Pending",
    taskList: [],
  };
  
  componentDidMountAsst = async () => {
    const uid = JSON.parse(localStorage.getItem("user")).id;
    const currentCospace = localStorage.getItem("recent_cospace_clicked");
    try {
      const { data } = await this.getTasks();
      let datas = [];
      data.map((task, index) => {
        if (uid === task.uid && task.cospaceName === currentCospace) {
          datas.push(task);
        }
      });
      this.setState({ taskList: datas });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.componentDidMountAsst();
  }
 
  getTasks = () => {
    return axios.get("http://localhost:8000/task");
  };
  handleChange = (event) => {
    if (event.target.name === "taskStatus") {
      this.setState({
        taskStatus: event.target.value,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.task === "" || this.state.taskNotes === "") {
      NotificationManager.warning(
        "Please Fill up Required Field. Please Check Task field And Task Notes field"
      );
      return false;
    }
    let data = {
      assignedBy: this.state.assignedBy,
      uid: this.state.uid,
      task: this.state.task,
      taskNotes: this.state.taskNotes,
      taskStatus: this.state.taskStatus,
      cospaceName: this.state.cospaceName,
    };

    axios
      .post("http://localhost:8000/task/add", data)
      .then(async (res) => {
        NotificationManager.warning("Task added!");
        this.state.task = "";
        this.state.taskNotes = "";
        this.state.taskStatus = "Pending";
        this.componentDidMountAsst();
      })
      .catch((error) => {
        if (error.response.status && error.response.status === 400)
          NotificationManager.error("Bad Request");
        else NotificationManager.error("Something Went Wrong");
      });
  };
  handleDelete = async (currentTask) => {
    const originalTasks = this.state.taskList;
    try {
      const taskList = originalTasks.filter((task) => task._id !== currentTask);
      this.setState({ taskList});
      await deleteTask(currentTask);
    } catch (error) {
      this.setState({ taskList: originalTasks });
      console.log(error);
    }
  };
  render() {
    let { taskList } = this.state;
    return (
      <div className="tasksection">
        <NotificationContainer />
        <h1>Tasks</h1>
        <h2>{localStorage.getItem("recent_cospace_clicked_description")}</h2>
        <div className="addnewtask">
          <form onSubmit={this.handleSubmit} className="taskform">
            <div className="taskname">
              <label htmlFor="taskName"><b>Task</b></label>
              <input
                type="text"
                name="task"
                className="taskname"
                onChange={this.handleChange}
                value={this.state.task}
              />
            </div>
            <div className="tasknotes">
              <label htmlFor="taskName">Task Notes</label>
              <textarea
                rows="3"
                name="taskNotes"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.taskNotes}
              ></textarea>
            </div>
            <div className="taskstatus">
              <label htmlFor="taskStatus">Task Status</label>
              <select
                name="taskStatus"
                className="taskstatusselect"
                onChange={this.handleChange}
                value={this.state.taskStatus}
              >
                <option value="pending">Pending</option>
                <option value="In Progress">In progress</option>
                <option value="Completed">Completed</option>
                <option value="Hold">Hold</option>
              </select>
            </div>
            <div className="submitnewtask">
              <input
                type="submit"
                name="add"
                id="addnewtask"
                value="Add"
              ></input>
            </div>
          </form>
        </div>

        <div className="tasklist">
          <ul className="taskheading taskcards">
            <li>
              <div className="taskcard">
                <div className="task">
                  <b>Task</b>
                </div>
                <div className="taskNotes">
                  <b>Task Notes</b>
                </div>
                <div className="assignedBy">
                  <b>Assigned By</b>
                </div>
                <div className="taskStatus">
                  <b>Task Status</b>
                </div>
              </div>
              <div className="taskcontrols">
                <div className="edittasks"></div>
                <div className="deletetasks"></div>
              </div>
            </li>
          </ul>
          <ul className="taskcards">
            {taskList.map((task) => (
              <li>
                <div className="taskcard">
                  <div className="task">{task.task}</div>
                  <div className="taskNotes">{task.taskNotes}</div>
                  <div className="assignedBy">{task.assignedBy}</div>
                  <div className="taskStatus">{task.taskStatus}</div>
                </div>
                <div className="taskcontrols">
                  <div className="edittasks">
                    <button id="editbtn">Edit</button>
                  </div>
                  <div className="deletetasks">
                    <button
                      id="deletebtn"
                      onClick={() => this.handleDelete(task._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Task;
