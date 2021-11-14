import Homepage from "./Homepage"; 
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Getstarted from "./Getstarted";
import Sidemenu from "./components/Sidemenu";
import CospaceMenu from "./components/CospaceMenu";
import Navbar from "./components/Navbar";
import Mainpage from "./Mainpage";
import { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {}

  componentDidMount = () => {
    axios.get('user').then(
      res => {
        this.setState({
          user: res.data
        });
      },
      err => {
        console.log(err);
      }
    )
  }

  render(){
    return (
      <Router>
        <Route path="/" exact component={() => <Homepage user={this.state.user}/>}/>
        <Route path="/getstarted" component={() => <Getstarted user={this.state.user}/>}/>
        <Route path="/sidemenu" component = {() => <Sidemenu user={this.state.user}/>}/>
        <Route path="/cospacemenu" component={() => <CospaceMenu user={this.state.user}/>}/>
        <Route path="/navbar" component = {() => <Navbar user={this.state.user}/>}/>
        <Route path="/mainpage" component = {() => <Mainpage user={this.state.user}/>}/>
      </Router>
    );
  }
}
