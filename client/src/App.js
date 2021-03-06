import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import MyJumbotron from './components/MyJumbotron';
import Search from './pages/Search';
import Saved from './pages/Saved';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <MyJumbotron />
          <Switch>
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
