import { Link } from "react-router-dom";

const Sidemenu = (props) => {
  const cospace_button_class_name = props.cospace_button_class_name;
  const calendar_button_class_name = props.calendar_button_class_name;
  const todo_button_class_name = props.todo_button_class_name;

  var cospace_png_src = "images/People.png";
  var calendar_png_src = "images/Planner.png";
  var todo_png_src = "images/Todo List.png";

  if (cospace_button_class_name === "selected") {
    cospace_png_src = "images/People white.png";
  } else if (calendar_button_class_name === "selected") {
    calendar_png_src = "images/Planner white.png";
  } else {
    todo_png_src = "images/Todo List white.png";
  }

  return (
    <div className="sidemenu">
      <ul>
        <Link to="/mainpage">
          <button className={cospace_button_class_name}>
            <li>
              <img src={cospace_png_src} alt="Co-Spaces" />
              <p>Co-Spaces</p>
            </li>
          </button>
        </Link>
        <Link to="/todopage">
          <button className={todo_button_class_name}>
            <li>
              <img src={todo_png_src} alt="ToDo List" />
              <p>ToDo List</p>
            </li>
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default Sidemenu;
