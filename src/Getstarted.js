import Blankspace from "./components/Blankspace";
import Titlebox from "./components/Titlebox";
import Vector from "./components/Vector";

const Getstarted = (props) => {
  const blankspace_class_name = "getstarted_blankspace";
  const titlebox_class_name = "getstarted_titlebox";
  const vector_class_name = "getstarted_vector";
  const vector_name = "getStartedVector.png";
  const vector_alt = "getStartedVector";
  return (
    <div className="getstarted">
      <Blankspace class_name={blankspace_class_name} />
      <Titlebox class_name={titlebox_class_name} />
      <Vector
        vector_class_name={vector_class_name}
        vector_name={vector_name}
        vector_alt={vector_alt}
      />
    </div>
  );
};

export default Getstarted;
