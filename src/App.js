import Homepage from "./Homepage"; 
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Getstarted from "./Getstarted";
import Mainpage from "./Mainpage";
import CreateCospacePage from "./CreateCospacePage";
import Chatpage from "./Chatpage";
import Taskspage from "./Taskspage";
import TodoPage from "./TodoPage";
import CalendarPage from "./CalendarPage";
import CoactorsPage from "./CoactorsPage";

import { useEffect } from "react";
import { useState } from "react";

function App(){

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:8000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true
        }
      })
      .then(response => {
        console.log(response)
        if (response.status === 200) return response.json();
        throw new Error("Authentication has been failed!");
      }).then(resObject => {
        setUser(resObject.user);
      }).catch(error => {
        console.log(error);
      })
    }
    getUser()
  },[])

  console.log(user);

  return (
    <Router>
      <div>
        <Routes>
          <Route 
            path = "/"
            element = {user ? <Navigate to="/mainpage"/> : <Homepage user = {user}/>}
          />
          <Route 
            path = "/getstarted"
            element = {user ? <Navigate to="/mainpage"/> : <Getstarted user = {user}/>}
          />
          <Route 
            path = "/mainpage"
            element = {user ? <Mainpage user = {user}/> : <Navigate to="/getstarted"/>}
          />
          <Route 
            path="/createcospace"
            element = {user ? <CreateCospacePage user = {user}/> : <Navigate to="/getstarted"/>}
          />
          <Route 
            path="/chatpage"
            element = {user ? <Chatpage user = {user}/> : <Navigate to="/getstarted"/>}
          />
          <Route 
            path="/taskpage"
            element = {user ? <Taskspage user = {user}/> : <Navigate to="/getstarted"/>}
          />
          <Route 
            path="/todopage"
            element = {user ? <TodoPage user = {user}/> : <Navigate to="/getstarted"/>}
          />
          <Route 
            path="/calendarpage"
            element = {user ? <CalendarPage user = {user}/> : <Navigate to="/getstarted"/>}
          />
          <Route 
            path="/coactorspage"
            element = {user ? <CoactorsPage user = {user}/> : <Navigate to="/getstarted"/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;