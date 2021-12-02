import Navbar from "./components/Navbar";
import Sidemenu from "./components/Sidemenu";
import CreateCospace from "./components/CreateCospace";

const CreateCospacePage = (props) => {

    const cospace_button_class_name = "selected";
    const calendar_button_class_name = "notselected";
    const todo_button_class_name = "notselected";

    return (
        <div className="createcospacepage">
            <Navbar user = {props.user}/>
            <Sidemenu cospace_button_class_name = {cospace_button_class_name}
                calendar_button_class_name = {calendar_button_class_name}
                todo_button_class_name = {todo_button_class_name}
            />
            <CreateCospace/>
        </div>
    );
}
 
export default CreateCospacePage;