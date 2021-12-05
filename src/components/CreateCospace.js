import React, { Component } from "react";
import axios from "axios";
// import MultipleValueTextInput from "react-multivalue-text-input";
// import ReactDOM from 'react-dom';
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
        console.log("Hamro data");
        console.log(response.data);

        data.map((user, index) => {
          payload.push({
            id: user.userId,
            text: user.username
          })
        })

        this.setState({ suggestions: payload });

        console.log("Data has been received!!");
      })
      .catch((e) => {
        //alert("Error");
        console.log(e);
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      tags: [],
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

    // re-render
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
      uid: JSON.parse(localStorage.getItem("user")).userId
    };
    console.log(databody);
    axios
      .post("http://localhost:8000/cospace/add", { databody })
      .then((res) => {
        console.log("Success");
        window.location.href = "http://localhost:3000/mainpage";
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
            {/* <MultipleValueTextInput
              name="item-input"
              onItemAdded={
                (item, allItems) => this.state.coactor.add(item)
                //console.log(`Item added: ${item}`)
                //console.log(allItems)
              }
              onItemDeleted={
                (item, allItems) => this.state.coactor.remove(item)
                //console.log(`Item removed: ${item}`)
              }
              name="coactor"
              value={this.state.coactor}
              onChange={this.handleChange}
            /> */}
            <ReactTags
              tags={tags}
              suggestions={suggestions}
              handleDelete={this.handleDelete}
              handleAddition={this.handleAddition}
              handleDrag={this.handleDrag}
              delimiters={delimiters}
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
