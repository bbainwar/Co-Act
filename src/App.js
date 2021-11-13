import Homepage from "./Homepage"; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Getstarted from "./Getstarted";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch> 
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/getstarted">
            <Getstarted />
          </Route> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
