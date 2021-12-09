import { Link } from "react-router-dom";

const ShowUsernameComponent = () => {
  return (
    <div className="showusernamecomponent">
      <p>
        Your username is "
        <username>
          {JSON.parse(localStorage.getItem("user")).displayName}
        </username>
        "!
      </p>
      <div className="linktomain">
        <Link to="/mainpage">
          <button>Back to mainpage</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowUsernameComponent;
