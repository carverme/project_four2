import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar'
import './App.css';
import Project from './Project';
import Goals from './Goals';
import Profile from './Profile';
import Login from './Login';
import Home from './Home';
import Navbar from './Navbar';
import User from './User';
// import Login from './Login';
import GoalsTracker from './GoalsTracker';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Navbar />
            <header className="App-header">
            {/* <Menubar /> */}
              <h1 className="App-title">Code Tracker </h1>
            </header>
            <Route exact path="/" render={() => <Home /> } />
            <Route path="/goals" render={() => <Goals /> } />
            <Route path="/profile" render={() => <Profile /> } />
            <Route path="/project" render={() => <Project /> } />
            <Route path="/login" render={() => <Login /> } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
