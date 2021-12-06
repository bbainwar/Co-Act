import React from "react";
import TaskList from "./taskList";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

class Task extends React.Component {
  state = {
    currentTask: [
      {
        // index: Math.random(),
        assignedBy: JSON.parse(localStorage.getItem("user")).dispayName,
        uid: JSON.parse(localStorage.getItem("user")).id,
        task: "",
        taskNotes: "",
        taskStatus: "",
      },
    ],
    taskList: [],
  };

  async componentDidMount() {
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
  }

  getTasks = () => {
    return axios.get("http://localhost:8000/task");
  };

  handleChange = (e) => {
    if (
      ["projectName", "task", "taskNotes", "taskStatus"].includes(e.target.name)
    ) {
      let taskList = [...this.state.taskList];
      taskList[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    for (var i = 0; i < this.state.taskList.length; i++) {
      if (
        this.state.taskList[i].projectName === "" ||
        this.state.taskList[i].task === ""
      ) {
        NotificationManager.warning(
          "Please Fill up Required Field.Please Check Project name And Task Field"
        );
        return false;
      }
    }
    let data = { formData: this.state };
    axios
      .post("http://localhost:8000/task/add", data)
      .then((res) => {
        if (res.data.success) NotificationManager.success(res.data.msg);
      })
      .catch((error) => {
        if (error.response.status && error.response.status === 400)
          NotificationManager.error("Bad Request");
        else NotificationManager.error("Something Went Wrong");
        this.setState({ errors: error });
      });
  };

  clickOnDelete(record) {
    this.setState({
      taskList: this.state.taskList.filter((r) => r !== record),
    });
  }

  render() {
    let { taskList } = this.state;
    return (
      <div className="tasksection">
        <h1>Tasks</h1>
        <p>{localStorage.getItem("recent_cospace_clicked_description")}</p>
        <form onSubmit={this.handleSubmit} className="taskform">
          <tr>
            <th>Task</th>
            <td>
              <input
                type="text"
                name="task"
                className="form-control"
              />
            </td>
            <td>
              <textarea
                name="taskNotes"
                className="form-control"
              ></textarea>
            </td>
            <td>
              <select
                name="taskStatus"
                className="form-control"
              >
                <option value="pending">Pending</option>
                <option value="In Progress">In progress</option>
                <option value="Completed">Completed</option>
                <option value="Hold">Hold</option>
              </select>
            </td>
          </tr>
        </form>

        <ul className="taskcards">
          {taskList.map((task) => (
            <li>
              <div className="taskcard">
                <div className="task">{task.task}</div>
                <div className="taskNotes">{task.taskNotes}</div>
                <div className="assignedBy">{task.assignedBy}</div>
                <div className="taskStatus">{task.taskStatus}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Task;
