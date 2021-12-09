import React, { Component } from "react";
import db from "../services/Firebase";
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    try {
      db.collection("chats").add({
        content: this.state.content,
        timestamp: new Date(),
        name: JSON.parse(localStorage.getItem("user")).displayName,
        cospacename: localStorage.getItem("recent_cospace_clicked"),
      });
      this.setState({ content: "" });
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  }
  async componentDidMount() {
    this.setState({ readError: null });
    try {
      db.collection("chats")
        .orderBy("timestamp")
        .onSnapshot((querySnapshot) => {
          let chats = [];
          querySnapshot.docs.forEach((doc) => {
            if (
              doc.data().cospacename ===
              localStorage.getItem("recent_cospace_clicked")
            ) {
              chats.push(doc.data());
            }
          });
          this.setState({ chats });
        });
    } catch (error) {
      this.setState({ readError: error.message });
    }
  }
  videoCall() {
    window.open("/vc.html", "win");
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
            <button onClick={this.videoCall}>
              Enter Room
            </button>
          </div>
        </div>

        <div className="chat-area" id="chat-area">
          {this.state.chats.map((chat) => {
            return (
              <div className="chat">
                <span className="chat-name">{chat.name}</span>
                <span className="chat-msg">{chat.content}</span>
              </div>
            );
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
