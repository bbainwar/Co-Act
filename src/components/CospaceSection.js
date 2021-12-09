import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Component } from "react";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

class CospaceSection extends Component {
  state = { posts: [] };
  componentDidMount = () => {
    this.getCospaces();
    if (localStorage.getItem("cospace_created") === "1") {
      NotificationManager.success("Co-Space Created Successfully!");
      localStorage.setItem("cospace_created", "0");
    }
  };
  getCospaces = () => {
    const uid = JSON.parse(localStorage.getItem("user")).id;

    axios
      .get("http://localhost:8000/cospace/")
      .then((response) => {
        let data = [];
        response.data.map((post, index) => {
          if (post.uid === uid) {
            data.push(post);
          } else {
            post.coactors.map((obj, index) => {
              if (obj.id === uid) {
                data.push(post);
              }
            });
          }
        });

        this.setState({ posts: data });
        console.log("Data has been received!!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  setCurrentCospace = (e) => {
    localStorage.setItem("recent_cospace_clicked", e.currentTarget.id);
    this.state.posts.map((post) => {
      if (post.cospacename === e.currentTarget.id) {
        localStorage.setItem(
          "recent_cospace_clicked_description",
          post.description
        );
        localStorage.setItem(
          "recent_cospace_clicked_coactors",
          JSON.stringify(post.coactors)
        );
        localStorage.setItem("recent_cospace_clicked_uid", post.uid);
      }
    });
    window.location.href = "http://localhost:3000/taskpage";
  };

  displayCospace = (posts) => {
    return posts.map((post, index) => (
      <div
        key={index}
        className="cospace"
        id={post.cospacename}
        onClick={this.setCurrentCospace}
      >
        <h3>{post.cospacename}</h3>
        <p>{post.description}</p>
      </div>
    ));
  };

  render() {
    return (
      <div className="cospacesection">
        <NotificationContainer/>
        <div className="mainpageheading">
          <h1>Co-SPACES</h1>
        </div>
        <div className="cospacelist">
          {this.displayCospace(this.state.posts)}
        </div>
        <Link to="/createcospace">
          <button className="createcospacebutton">
            <img src="/images/Add User Group Man Man.png" />
            <p>Create</p>
          </button>
        </Link>
      </div>
    );
  }
}

export default CospaceSection;
