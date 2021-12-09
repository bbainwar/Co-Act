import { Link } from "react-router-dom";

const Vector = (props) => {
  const vector_class_name = props.vector_class_name;
  const vector_src = "images/" + props.vector_name;
  const vector_alt = props.vector_alt;

  return (
    <div className="vector">
      <div className={vector_class_name}>
        <img src={vector_src} alt={vector_alt} />
      </div>
      {(() => {
        if (vector_class_name === "homepage_vector") {
          return (
            <div className="button1">
              {" "}
              <Link to="/getstarted">Get Started</Link>{" "}
            </div>
          );
        }
        return null;
      })()}
    </div>
  );
};

export default Vector;
