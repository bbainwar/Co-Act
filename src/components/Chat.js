// import React, { Component } from "react";
// //import Header from "../components/Header";
// //import { auth } from "../services/firebase";
// import db  from "../services/Firebase";

// export default class Chat extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       //user: auth().currentUser,
//       chats: [],
//       content: "",
//       readError: null,
//       writeError: null,
//       loadingChats: false,
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.myRef = React.createRef();
//   }

//   async componentDidMount() {
//     this.setState({ readError: null, loadingChats: true });
//     const chatArea = this.myRef.current;
//     try {
//       db.collection("chats").on("value", (snapshot) => {
//         let chats = [];
//         snapshot.docs.forEach((snap) => {
//           console.log(snap.data().cospacename);
//           if (
//             snap.data().cospacename ===
//             localStorage.getItem("recent_cospace_clicked")
//           ) {
//             chats.push(snap.data());
//           }
//         });
//         chats.sort(function (a, b) {
//           return a.timestamp - b.timestamp;
//         });
//         this.setState({ chats });
//         chatArea.scrollBy(0, chatArea.scrollHeight);
//         this.setState({ loadingChats: false });
//       });
//     } catch (error) {
//       this.setState({ readError: error.message, loadingChats: false });
//     }
//   }

//   handleChange(event) {
//     this.setState({
//       content: event.target.value,
//     });
//   }

//   async handleSubmit(event) {
//     event.preventDefault();
//     this.setState({ writeError: null });
//     const chatArea = this.myRef.current;
//     try {
//       db.collection("chats").add({
//         content: this.state.content,
//         timestamp: Date.now(),
//         uid: JSON.parse(localStorage.getItem("user")).id,
//         cospacename: localStorage.getItem("recent_cospace_clicked"),
//       });
//       this.setState({ content: "" });
//       chatArea.scrollBy(0, chatArea.scrollHeight);
//     } catch (error) {
//       this.setState({ writeError: error.message });
//     }
//   }

//   formatTime(timestamp) {
//     const d = new Date(timestamp);
//     const time = `${d.getDate()}/${
//       d.getMonth() + 1
//     }/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
//     return time;
//   }

//   render() {
//     return (
//       <div className="chat-window" id="chat-window">
//         <div className="chat-head">
//           <div>
//             <p>Messages are permanently saved in the database.</p>
//           </div>
//           <div className="callbtns">
//             <button>
//               <img src="/images/Call.png" alt="Call" />
//             </button>
//             <button>
//               <img src="/images/Video Call.png" alt="Video Call" />
//             </button>
//           </div>
//         </div>

//         <div className="chat-area" id="chat-area">
//           {this.state.chats.map((chat) => {
//             return <p key={chat.timestamp}>{chat.content}</p>;
//           })}
//         </div>

//         <div className="send-area">
//           <form onSubmit={this.handleSubmit}>
//             <input
//               type="text"
//               placeholder="Enter message"
//               id="msg-data"
//               onChange={this.handleChange}
//               value={this.state.content}
//             />
//             <button id="msg-send">Send</button>
//           </form>
//         </div>
//       </div>
//       // <div>
        
//       //   <div className="chat-area" ref={this.myRef}>
//       //     {/* loading indicator */}
//       //     {this.state.loadingChats ? (
//       //       <div className="spinner-border text-success" role="status">
//       //         <span className="sr-only">Loading...</span>
//       //       </div>
//       //     ) : (
//       //       ""
//       //     )}
//       //     {/* chat area */}
//       //     {this.state.chats.map((chat) => {
//       //       return (
//       //         <p
//       //           key={chat.timestamp}
//       //           className={
//       //             "chat-bubble " +
//       //             (this.state.user.uid === chat.uid ? "current-user" : "")
//       //           }
//       //         >
//       //           {chat.content}
//       //           <br />
//       //           <span className="chat-time float-right">
//       //             {this.formatTime(chat.timestamp)}
//       //           </span>
//       //         </p>
//       //       );
//       //     })}
//       //   </div>
//       //   <form onSubmit={this.handleSubmit} className="mx-3">
//       //     <textarea
//       //       className="form-control"
//       //       name="content"
//       //       onChange={this.handleChange}
//       //       value={this.state.content}
//       //     ></textarea>
//       //     {this.state.error ? (
//       //       <p className="text-danger">{this.state.error}</p>
//       //     ) : null}
//       //     <button type="submit" className="btn btn-submit px-5 mt-4">
//       //       Send
//       //     </button>
//       //   </form>
//       //   {/* <div className="py-5 mx-3">
//       //     Login in as: <strong className="text-info">{this.state.user.email}</strong>
//       //   </div> */}
//       // </div>
//     );
//   }
// }
import { FirebaseError } from "@firebase/util";
import React, { Component } from "react";
import moment from "moment";
import { query, orderBy } from "firebase/firestore";

//import  from "../services/firebase";
//import {firebase} from "../services/Firebase";
import db from "../services/Firebase";
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
    try {
    db.collection("chats").add({
      content: this.state.content,
      timestamp: new Date(),
      uid: JSON.parse(localStorage.getItem("user")).id,
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
      // db.ref("chats").orderByChild("time").on("value", results => {
      //     results.forEach((snapshot) => {
      //       const userData = snapshot.val();
      //       console.log(userData)
      //     });
      // });

      // firebase
      //   .db
      //   .ref("chats")
      //   .orderByChild("time")
      //   .on("value", (snapshot) => {
      //     snapshot.forEach((c) => {

      //});
      //const q = query(citiesRef, orderBy("state"), orderBy("population", "desc"));
      db.collection("chats",orderBy("timestamp")).onSnapshot((querySnapshot) => {
        let chats = [];
        querySnapshot.docs
          .forEach((doc) => {
            //console.log(doc.data());
            //console.log(doc.cospacename);
            if (
              doc.data().cospacename ===
              localStorage.getItem("recent_cospace_clicked")
            ) {
              chats.push(doc.data());
            }
            // console.log(doc);
            // console.log(doc.val());
          });
        this.setState({ chats});
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
            return (
              <div className="chat">
                <span className="chat-name">Roshan</span>
                <span className="chat-msg">{chat.content}</span>
              </div>
            ) 
            // <p key={chat.timestamp}>{chat.content}</p>;
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
