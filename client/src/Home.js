import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div class="login-container">
          <section class="login" id="login">
            <header>
              <h2>Code Tracker</h2>
              <h4>Login</h4>
            </header>
            <form class="login-form" action="#" method="post">
              <input type="text" class="login-input" placeholder="User" required autofocus/>
              <input type="password" class="login-input" placeholder="Password" required/>
              <div class="submit-container">
                <button type="submit" class="login-button">SIGN IN</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
