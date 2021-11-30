import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Component } from "react";

class CospaceSection extends Component {
  state = { posts: [] };
  componentDidMount = () => {
    this.getCospaces();
  };
  getCospaces = () => {
    axios
      .get("http://localhost:8000/cospace/")
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log("Data has been received!!");
      })
      .catch((e) => {
        //alert("Error");
        console.log(e);
      });
  };
  displayCospace = (posts) => {
    //if (!posts.length()) return null;
    return posts.map((post, index) => (
      <div key={index} className="cospace">
        <h3>{posts.cospacename}</h3>
      </div>
    ));
  };
  render() {
    return (
      <div className="cospacesection">
        <div className="mainpageheading">
          <h1>Co-SPACES</h1>
        </div>
        <div className="cospacelist">
          {this.displayCospace(this.state.posts)}
          {/* <div className="cospace"></div>
                <div className="cospace"></div>
                <div className="cospace"></div>
                <div className="cospace"></div>
                <div className="cospace"></div>
                <div className="cospace"></div>
                <div className="cospace"></div>
                <div className="cospace"></div> */}
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
