import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar'
import './App.css';
import Calendar from './Calendar';
import Goals from './Goals';
import Home from './Home';
import Navbar from './Navbar';
import User from './User';
// import Login from './Login';
import GoalTracker from './GoalTracker';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Navbar />
            <header className="App-header">
            {/* <Menubar /> */}
              <h1 className="App-title">SeeGoal App</h1>
            </header>
            <Route exact path="/" render={() => <Home /> } />
            <Route path="/goals" render={() => <Goals /> } />
            {/* <Route path="/login" render={() => <Login /> } /> */}
            <Route path="/calendar" render={() => <Calendar /> } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
