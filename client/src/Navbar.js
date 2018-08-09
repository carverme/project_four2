import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import './App.css';

const Navbar = props => {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/goals'>Goals</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/calendar'>Calendar</Link></li>
      </ul>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            This is where my navagation bar is.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}




export default Navbar;
