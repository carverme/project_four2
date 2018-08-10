import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="login-container">
          <section className="login" id="login">
            <header>
              <h2>Code Tracker</h2>
              <h4>Login</h4>
            </header>
              <div className="container">
                <Button linkto="http://localhost:3001/auth/github" className="btn">GitHub Login</Button>
              </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
