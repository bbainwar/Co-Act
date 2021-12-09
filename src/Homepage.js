import Titlebox from "./components/Titlebox";
import Blankspace from "./components/Blankspace";
import Vector from "./components/Vector";

const Homepage = () => {
  const titlebox_class_name = "homepage_titlebox";
  const blankspace_class_name = "homepage_blankspace";
  const vector_class_name = "homepage_vector";
  const vector_name = "landingPageVector.png";
  const vector_alt = "landingVector";

  return (
    <div className="homepage">
      <Titlebox class_name={titlebox_class_name} />
      <Blankspace class_name={blankspace_class_name} />
      <Vector
        vector_class_name={vector_class_name}
        vector_name={vector_name}
        vector_alt={vector_alt}
      />
    </div>
  );
};

export default Homepage;
