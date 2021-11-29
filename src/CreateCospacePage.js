import Navbar from "./components/Navbar";
import Sidemenu from "./components/Sidemenu";
import CreateCospace from "./components/CreateCospace";

const CreateCospacePage = () => {
    return (
        <div className="createcospacepage">
            <Navbar/>
            <Sidemenu/>
            <CreateCospace/>
        </div>
    );
}
 
export default CreateCospacePage;