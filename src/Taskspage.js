import Navbar from "./components/Navbar";
import Sidemenu from "./components/Sidemenu";
import CospaceMenu from "./components/CospaceMenu";
import Task from "./components/Task";


const Taskspage = () => {
    const cospace_button_class_name = "selected";
    const calendar_button_class_name = "notselected";
    const todo_button_class_name = "notselected";
    const chat_button_class_name = "notselected";
    const task_button_class_name = "selected";
    const file_button_class_name = "notselected";
    const coactor_button_class_name = "notselected";

    return (
        <div className="chatpage">
            <Navbar/>
            <Sidemenu cospace_button_class_name = {cospace_button_class_name}
                calendar_button_class_name = {calendar_button_class_name}
                todo_button_class_name = {todo_button_class_name}
            />
            <CospaceMenu chat_button_class_name = {chat_button_class_name}
                task_button_class_name = {task_button_class_name}
                file_button_class_name = {file_button_class_name}
                coactor_button_class_name = {coactor_button_class_name}
            />
            <Task/>
        </div>
    );
}
 
export default Taskspage;