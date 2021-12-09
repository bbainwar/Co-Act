import { Link } from "react-router-dom";

const CospaceMenu = (props) => {
  const chat_button_class_name = props.chat_button_class_name;
  const task_button_class_name = props.task_button_class_name;

  const coactor_button_class_name = props.coactor_button_class_name;

  var chat_png_src = "images/Facebook Messenger.png";
  var task_png_src = "images/Task.png";

  var coactor_png_src = "images/Leadership.png";

  if (chat_button_class_name === "selected") {
    chat_png_src = "images/Facebook Messenger white.png";
  } else if (task_button_class_name === "selected") {
    task_png_src = "images/Task white.png";
  } else {
    coactor_png_src = "images/Leadership white.png";
  }

  return (
    <div className="cospacemenu">
      <h1>{localStorage.getItem("recent_cospace_clicked")}</h1>
      <ul>
        <Link to="/taskpage">
          <button className={task_button_class_name}>
            <li>
              <img src={task_png_src} alt="Tasks" />
              <p>Tasks</p>
            </li>
          </button>
        </Link>
        <Link to="/chatpage">
          <button className={chat_button_class_name}>
            <li>
              <img src={chat_png_src} alt="Chat" />
              <p>Chat</p>
            </li>
          </button>
        </Link>

        <Link to="/coactorspage">
          <button className={coactor_button_class_name}>
            <li>
              <img src={coactor_png_src} alt="Co-Actors" />
              <p>Co-Actors</p>
            </li>
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default CospaceMenu;
