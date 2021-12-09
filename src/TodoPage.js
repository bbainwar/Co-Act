import TodoSection from "./components/TodoSection";
import Navbar from "./components/Navbar";
import Sidemenu from "./components/Sidemenu";

const TodoPage = () => {
  const cospace_button_class_name = "notselected";
  const todo_button_class_name = "selected";

  return (
    <div className="todopage">
      <Navbar />
      <Sidemenu
        cospace_button_class_name={cospace_button_class_name}
        todo_button_class_name={todo_button_class_name}
      />
      <TodoSection />
    </div>
  );
};

export default TodoPage;
