import { Component } from "react";
import {
  addTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../services/taskServices";
import axios from "axios";
class Tasks extends Component {
  state = { tasks: [], currentTask: "" };
  async componentDidMount() {
    const uid = JSON.parse(localStorage.getItem("user")).id;
    try {
      const { data } = await getTasks();
      let datas = [];
      data.map((todo, index) => {
          if(uid===todo.uid){
              datas.push(todo);
          }
      });
      this.setState({ tasks: datas });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = ({ currentTarget: input }) => {
    this.setState({ currentTask: input.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const originalTasks = this.state.tasks;
    try {
      const { data } = await addTask({
        task: this.state.currentTask,
        uid: JSON.parse(localStorage.getItem("user")).id,
      });
      const tasks = originalTasks;
      tasks.push(data);
      this.setState({ tasks, currentTask: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleUpdate = async (currentTask) => {
    const originalTasks = this.state.tasks;
    try {
      const tasks = [...originalTasks];
      const index = tasks.findIndex((task) => task._id === currentTask);
      tasks[index] = { ...tasks[index] };
      tasks[index].completed = !tasks[index].completed;
      this.setState({ tasks });
      await updateTask(currentTask, {
        completed: tasks[index].completed,
      });
    } catch (error) {
      this.setState({ tasks: originalTasks });
      console.log(error);
    }
  };

  handleDelete = async (currentTask) => {
    const originalTasks = this.state.tasks;
    try {
      const tasks = originalTasks.filter((task) => task._id !== currentTask);
      this.setState({ tasks });
      await deleteTask(currentTask);
    } catch (error) {
      this.setState({ tasks: originalTasks });
      console.log(error);
    }
  };
}

export default Tasks;