import React from "react";
import axios from "axios";

class CoactorsSection extends React.Component {
  state = {
    coactorList: [],
  };

  getCoactors = () => {
    return axios.get("http://localhost:8000/user");
  };

  componentDidMountAsst = async () => {
    const uid = JSON.parse(localStorage.getItem("user")).id;
    const currentCospace = localStorage.getItem("recent_cospace_clicked");
    try {
      const { data } = await this.getCoactors();
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

  render() {
    return (
      <div className="coactorssection">
        <h1>Coactors Section</h1>
      </div>
    );
  }
}

export default CoactorsSection;
