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

              <Link to='/'>Home</Link>
              <Link to='/goals'>Goals</Link>
              <Link to='/login'>Login</Link>
              <Link to='/calendar'>Calendar</Link>

          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}




export default Navbar;
