import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Home extends Component {
  constructor()
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
                <Button onClick={this.handleClick} className="btn">GitHub Login</Button>
              </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
