import Navbar from "./components/Navbar";
import Sidemenu from "./components/Sidemenu";
import CospaceSection from "./components/CospaceSection";

const Mainpage = () => {
    return (
        <div className="mainpage">
            <Navbar/>
            <Sidemenu/>
            <CospaceSection/>
        </div>
    );
}
 
export default Mainpage;