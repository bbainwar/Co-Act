import Navbar from "./components/Navbar";
import Sidemenu from "./components/Sidemenu";
import CreateCospace from "./components/CreateCospace";

const CreateCospacePage = () => {
  const cospace_button_class_name = "selected";
  const todo_button_class_name = "notselected";

  return (
    <div className="createcospacepage">
      <Navbar />
      <Sidemenu
        cospace_button_class_name={cospace_button_class_name}
        todo_button_class_name={todo_button_class_name}
      />
      <CreateCospace />
    </div>
  );
};

export default CreateCospacePage;
