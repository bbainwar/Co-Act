import Homepage from "./Homepage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Getstarted from "./Getstarted";
import Mainpage from "./Mainpage";
import CreateCospacePage from "./CreateCospacePage";
import Chatpage from "./Chatpage";
import Taskspage from "./Taskspage";
import TodoPage from "./TodoPage";
import CalendarPage from "./CalendarPage";
import CoactorsPage from "./CoactorsPage";
import { useEffect, useState } from "react";
import ShowUsernamePage from "./ShowUsernamePage";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:8000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }).then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("Authentication has been failed");
      }).then(resObject => {
        // localStorage.setItem("user", resObject);
        setUser(resObject.user);
        localStorage.setItem("user", JSON.stringify(resObject.user))
      }).catch(error => {
        console.log(error);
      })
    }
    getUser();
  }, []);

  // if (!user && window.location.pathname === "/mainpage"){
  //   return(
  //     <div>
  //       loading...
  //     </div>
  //   )
  // }

  console.log(user);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            exact
            element={
              user ? (
                <Navigate to="/mainpage" />
              ) : (
                <Homepage />
              )
            }
          />
          <Route
            path="/getstarted"
            element={
              user ? (
                <Navigate to="/mainpage" />
              ) : (
                <Getstarted />
              )
            }
          />
          <Route
            path="/mainpage"
            element={
              user ? (
                <Mainpage />
              ) : (
                <Navigate to="/getstarted" />
              )
            }
          />
          <Route
            path="/createcospace"
            element={
              user ? (
                <CreateCospacePage />
              ) : (
                <Navigate to="/getstarted" />
              )
            }
          />
          <Route
            path="/chatpage"
            element={
              user ? (
                <Chatpage />
              ) : (
                <Navigate to="/getstarted" />
              )
            }
          />
          <Route
            path="/taskpage"
            element={
              // user ? (
                <Taskspage/>
              //) : (
                //<Navigate to="/getstarted" />
              //)
            }
          />
          <Route
            path="/todopage"
            element={
              user ? (
                <TodoPage />
              ) : (
                <Navigate to="/getstarted" />
              )
            }
          />
          <Route
            path="/calendarpage"
            element={
              user ? (
                <CalendarPage />
              ) : (
                <Navigate to="/getstarted" />
              )
            }
          />
          <Route
            path="/coactorspage"
            element={
              user ? (
                <CoactorsPage />
              ) : (
                <Navigate to="/getstarted" />
              )
            }
          />
          <Route
            path="/showusernamepage"
            element={
              user ? (
                <ShowUsernamePage />
              ) : (
                <Navigate to="/getstarted" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
