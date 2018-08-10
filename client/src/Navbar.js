import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import './App.css';

const Navbar = props => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">

            <div className="link-name">
              <Link to='/'>Home</Link>
              <Link to='/goals'>Profile</Link>
              <Link to='/login'>Login</Link>
              <Link to='/Project'>Project</Link>
            </div>

          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}




export default Navbar;
