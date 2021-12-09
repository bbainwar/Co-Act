import Navbar from "./components/Navbar";
import Sidemenu from "./components/Sidemenu";
import CospaceSection from "./components/CospaceSection";

const Mainpage = () => {

    const cospace_button_class_name = "selected";
    const todo_button_class_name = "notselected";
    
    return (
        <div className="mainpage">
            <Navbar/>
            <Sidemenu cospace_button_class_name = {cospace_button_class_name}
                todo_button_class_name = {todo_button_class_name}
            />
            <CospaceSection/>
        </div>
    );
}
 
export default Mainpage;