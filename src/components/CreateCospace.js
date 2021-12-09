import React, { Component } from "react";
import axios from "axios";
import { WithContext as ReactTags } from "react-tag-input";

const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];

class CreateCospace extends Component {
  componentDidMount = () => {
    this.getCoActors();
  };

  getCoActors = () => {
    axios
      .get("http://localhost:8000/user/")
      .then((response) => {
        const data = response.data;
        let payload = [];
        data.map((user, index) => {
          payload.push({
            id: user.userId,
            text: user.username,
          });
        });

        this.setState({ suggestions: payload });

        console.log("Data has been received!!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      tags: [
        {
          id: JSON.parse(localStorage.getItem("user")).id,
          text: JSON.parse(localStorage.getItem("user")).displayName,
        },
      ],
      suggestions: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition(tag) {
    this.setState((state) => ({ tags: [...state.tags, tag] }));
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    this.setState({ tags: newTags });
  }
  handleChange(event) {
    if ([].includes(event.target.name)) {
      let coactor = [this.state.coactor];
      coactor.add(event.target.name);
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let databody = {
      title: this.state.title,
      description: this.state.description,
      coactor: this.state.tags,
      uid: JSON.parse(localStorage.getItem("user")).id,
    };
    console.log(databody);
    axios
      .post("http://localhost:8000/cospace/add", { databody })
      .then((res) => {
        localStorage.setItem("cospace_created", "1");
        window.location.href = "http://localhost:3000/mainpage";
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else if (error.message) {
          console.log(error.message);
        }
      });
  }
  render() {
    const { tags, suggestions } = this.state;
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
            <ReactTags
              tags={tags}
              suggestions={suggestions}
              handleDelete={this.handleDelete}
              handleAddition={this.handleAddition}
              handleDrag={this.handleDrag}
              delimiters={delimiters}
            />
          </div>
          <div className="submitcospace">
            <input
              type="submit"
              name="create"
              id="create"
              value="Create"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
export default CreateCospace;
