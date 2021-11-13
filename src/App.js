import Homepage from "./Homepage"; 
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Getstarted from "./Getstarted";
import Sidemenu from "./components/Sidemenu";
import CospaceMenu from "./components/CospaceMenu";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Homepage}/>
      <Route path="/getstarted" component={Getstarted}/>
      <Route path="/sidemenu" component={Sidemenu}/>
      <Route path="/cospacemenu" component={CospaceMenu}/>
    </Router>
  );
}

export default App;
