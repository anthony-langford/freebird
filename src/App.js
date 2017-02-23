<<<<<<< HEAD
import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Host from './Host.js';


const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
    };
  }


  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Host/>
=======
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

class App extends Component {

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.ws = io.connect('ws://localhost:4000');
    this.ws.emit('event', function(data) {
      console.log("Hello");
    });
  };

  componentWillUnmount() {
    console.log('Closing socket connection');
    this.ws.close();
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
>>>>>>> 86711b17071889c864398c83c592597f9d8cf65f
        </div>
        <p className="App-intro">
          HOSTS PAGE
        </p>
        <p>
          <Link to="/host">Host Page</Link>
          <br/>
          <Link to="/users">Users Page</Link>
        </p>
      </div>
    );
  }
};

export default App;