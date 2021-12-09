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
import CoactorsPage from "./CoactorsPage";
import { useEffect, useState } from "react";
import ShowUsernamePage from "./ShowUsernamePage";
import JitsiRoom from "./JitsiRoom";

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
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("Authentication has been failed");
        })
        .then((resObject) => {
          setUser(resObject.user);
          localStorage.setItem("user", JSON.stringify(resObject.user));
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUser();
  }, []);
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            exact
            element={
              localStorage.getItem("user") || user ? (
                <Navigate to="/mainpage" />
              ) : (
                <Homepage />
              )
            }
          />
          <Route
            path="/getstarted"
            element={
              localStorage.getItem("user") || user ? (
                <Navigate to="/mainpage" />
              ) : (
                <Getstarted />
              )
            }
          />
          <Route
            path="/mainpage"
            element={
              localStorage.getItem("user") || user ? (
                <Mainpage />
              ) : (
                <Navigate to="/getstarted" />
              )
            }
          />
          <Route
            path="/createcospace"
            element={
              localStorage.getItem("user") || user ? (
                <CreateCospacePage />
              ) : (
                <Navigate to="/getstarted" />
              )
            }
          />
          <Route
            path="/chatpage"
            element={
              localStorage.getItem("user") || user ? (
                <Chatpage />
              ) : (
                <Navigate to="/getstarted" />
              )
            }
          />
          <Route
            path="/taskpage"
            element={
              localStorage.getItem("user") || user ? (
                <Taskspage />
              ) : (
                <Navigate to="/getstarted" />
              )
            }
          />
          <Route
            path="/todopage"
            element={
              localStorage.getItem("user") || user ? (
                <TodoPage />
              ) : (
                <Navigate to="/getstarted" />
              )
            }
          />
          <Route
            path="/coactorspage"
            element={
              localStorage.getItem("user") || user ? (
                <CoactorsPage />
              ) : (
                <Navigate to="/getstarted" />
              )
            }
          />
          <Route
            path="/showusernamepage"
            element={
              localStorage.getItem("user") || user ? (
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
