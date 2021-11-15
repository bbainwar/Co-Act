import Homepage from "./Homepage"; 
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Getstarted from "./Getstarted";
import Sidemenu from "./components/Sidemenu";
import CospaceMenu from "./components/CospaceMenu";
import Navbar from "./components/Navbar";
import Mainpage from "./Mainpage";

function App(){
  return (
    <Router>
      <Route path="/" exact ><Homepage/></Route>
      <Route path="/getstarted"><Getstarted/></Route>
      <Route path="/mainpage"><Mainpage/></Route>
      {/* 
      <Route path="/sidemenu" component = {<Sidemenu/>}/>
      <Route path="/cospacemenu" component={<CospaceMenu/>}/>
      <Route path="/navbar" component = {<Navbar/>}/>
       */}
    </Router>
  );
}

export default App;