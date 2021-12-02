import Homepage from "./Homepage"; 
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Getstarted from "./Getstarted";
import Mainpage from "./Mainpage";
import CreateCospacePage from "./CreateCospacePage";
import Chatpage from "./Chatpage";

function App(){

  const user = true;

  return (
    <Router>
      <div>
        <Routes>
          <Route 
            path = "/"
            element = {user ? <Navigate to="/mainpage"/> : <Homepage/>}
          />
          <Route 
            path = "/getstarted"
            element = {user ? <Navigate to="/mainpage"/> : <Getstarted/>}
          />
          <Route 
            path = "/mainpage"
            element = {user ? <Mainpage/> : <Navigate to="/getstarted"/>}
          />
          <Route 
            path="/createcospace"
            element = {user ? <CreateCospacePage/> : <Navigate to="/getstarted"/>}
          />
          <Route 
            path="/chatpage"
            element = {user ? <Chatpage/> : <Navigate to="/getstarted"/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;