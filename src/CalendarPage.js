import CalendarSection from './components/CalendarSection';
import Navbar from './components/Navbar';
import Sidemenu from './components/Sidemenu';

const CalendarPage = () => {
    const cospace_button_class_name = "notselected";
    const calendar_button_class_name = "selected";
    const todo_button_class_name = "notselected";
    
    return (
        <div className="calendarpage">
            <Navbar/>
            <Sidemenu cospace_button_class_name = {cospace_button_class_name}
                calendar_button_class_name = {calendar_button_class_name}
                todo_button_class_name = {todo_button_class_name}
            />
            <CalendarSection/>
        </div>
    );
}
 
export default CalendarPage;