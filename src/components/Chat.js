import { FirebaseError } from "@firebase/util";
import React, { Component } from "react";
//import  from "../services/firebase";
//import {firebase} from "../services/Firebase";
import db  from "../services/Firebase";
class Chat extends Component {
  //ref = firebase.fireStore().colection("chats");
  constructor(props) {
    super(props);
    this.state = {
      //user: auth().currentUser,
      chats: [],
      content: "",
      readError: null,
      writeError: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });
    //try {
      db.collection("chats").add({
        content: this.state.content,
        timestamp: Date.now(),
        uid: JSON.parse(localStorage.getItem("user")).id,
        cospacename: localStorage.getItem("recent_cospace_clicked"),
      });
      this.setState({ content: "" });
    // } catch (error) {
    //   this.setState({ writeError: error.message });
    // }
  };
  async componentDidMount() {
    this.setState({ readError: null });
    try {
      db.collection("chats").onSnapshot((querySnapshot) => {
        let chats = [];
        querySnapshot.docs.forEach((doc) => {
          //console.log(doc.data());
          //console.log(doc.cospacename);
          if(doc.data().cospacename===localStorage.getItem("recent_cospace_clicked")){
            chats.push(doc.data());
          }
          // console.log(doc);
          // console.log(doc.val());
        });
        this.setState({ chats });
      });
    } catch (error) {
      this.setState({ readError: error.message });
    }
  }
  handleChange(event) {
    this.setState({
      content: event.target.value,
    });
  }
  render() {
    return (
      <div className="chat-window" id="chat-window">
        <div className="chat-head">
          <div>
            <p>Messages are permanently saved in the database.</p>
          </div>
          <div className="callbtns">
            <button>
              <img src="/images/Call.png" alt="Call" />
            </button>
            <button>
              <img src="/images/Video Call.png" alt="Video Call" />
            </button>
          </div>
        </div>

        <div className="chat-area" id="chat-area">
          {this.state.chats.map((chat) => {
            return <p key={chat.timestamp}>{chat.content}</p>;
          })}
        </div>

        <div className="send-area">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Enter message"
              id="msg-data"
              onChange={this.handleChange}
              value={this.state.content}
            />
            <button id="msg-send">Send</button>
          </form>
        </div>
      </div>
    );
  }
}
export default Chat;
