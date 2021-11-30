import React, { Component } from "react";
import axios from "axios";
class CreateCospace extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "", coactor: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let databody = {
      title: this.state.title,
      description: this.state.description,
      coactor: this.state.coactor,
    };
    console.log(databody);
    axios
      .post("http://localhost:8000/cospace/add", { databody })
      .then((res) => {
        console.log("Success");
        window.location.href="http://localhost:3000/mainpage";
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
          //do something else
        } else if (error.message) {
          console.log(error.message);
          //do something other than the other two
        }
      });
    // return fetch("http://localhost:8000/cospace/add", {
    //   method: "POST",
    //   body: JSON.stringify(databody),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    // alert("Hacked");
    // event.preventDefault();
  }
  render() {
    return (
      <div className="createcospace">
        <h1>Co-SPACE Creation</h1>
        <form onSubmit={this.handleSubmit} method="POST">
          <div className="cospacename">
            <label htmlFor="coSpaceName">Co-Space Name:</label>
            <input
              type="text"
              name="title"
              id="coSpaceName"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="cospacedescription">
            <label htmlFor="coSpaceDescription">Description:</label>
            <textarea
              rows="15"
              cols="150"
              type="text"
              name="description"
              id="description"
              value={this.state.description}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="coactornames">
            <label htmlFor="coActorNames">Co-Actor Names:</label>
            <input
              type="text"
              name="coactor"
              id="coSpaceName"
              value={this.state.coactor}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="submit"
              name="create"
              id="create"
              value="create"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateCospace;
