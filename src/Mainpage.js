import Navbar from "./components/Navbar";
import Sidemenu from "./components/Sidemenu";
import CospaceSection from "./components/CospaceSection";

const Mainpage = (props) => {

    const cospace_button_class_name = "selected";
    const calendar_button_class_name = "notselected";
    const todo_button_class_name = "notselected";
    
    return (
        <div className="mainpage">
            <Navbar user = {props.user}/>
            <Sidemenu cospace_button_class_name = {cospace_button_class_name}
                calendar_button_class_name = {calendar_button_class_name}
                todo_button_class_name = {todo_button_class_name}
            />
            <CospaceSection/>
        </div>
    );
}
 
export default Mainpage;