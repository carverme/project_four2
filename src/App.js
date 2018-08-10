import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Project from './Project';
import Goals from './Goals';
import Profile from './Profile';
import Login from './Login';
import Home from './Home';
import User from './User';
import GoalsTracker from './GoalsTracker';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navbar from './Navbar';


class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       accesstoken: '',
//       githubid: null
//     }
//     // this.checkForGithubToken = this.checkForGithubToken.bind(this);
//     // this.logout = this.logout.bind(this);
//     // this.liftTokenToState = this.liftTokenToState.bind(this);
//   }
//
// liftTokenToState(data) {
//   this.setState({
//     accesstoken: data.accesstoken,
//     githubid: data.githubid
//   })
// }
//
// //Do we need a handleclick function here?
//
// componentDidMount() {
//   this.checkForGithubToken();
// }
//
// logout() {
//   //remove accesstoken from local storage
//   localStorage.removeItem('githubToken');
//   //remove information from state
//   this.setState({
//     accesstoken: '',
//     githubid: null
//   })
// }
//
// checkForGithubToken() {
//   //Look for token in local localStorage
//   let token = localStorage.getItem('githubToken');
//   if (!token) {
//     //there was no liftTokenToState
//     //remove githubToken from local storage just in case corrupted or replaced..
//     localStorage.removeItem('githubToken')
//     this.setState({
//       accesstoken: '',
//       githubid: null
//     })
//   } else {
//     //token found in local local local storage
//     //send it to the back to be verified
//     axios.post('index/', {
//       accesstoken
//     }).then(results => {
//       //put the token in local storage
//       localStorage.setItem('githubToken', results.data.accesstoken);
//       this.setState({
//         accesstoken: results.data.accesstoken,
//         githubid: results.data.githubid
//       })
//     }).catch(err => console.log(err))
//   }




  render() {
    // let user = this.state.githubid;

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
