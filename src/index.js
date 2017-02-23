import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Host from './Host';
import Users from './Users';
import './index.css';
import {
  BrowserRouter as Router,
  // eslint-disable-next-line
  StaticRouter, // for server rendering
  Route,
  // eslint-disable-next-line
  Link
  // etc.
} from 'react-router-dom'

ReactDOM.render((
  <Router>
    <Route path="/" component={App} />
  </Router>
), document.getElementById('root'));


ReactDOM.render((
  <Router>
    <Route path="/users" component={Users} />
  </Router>
), document.getElementById('users'));

ReactDOM.render((
  <Router>
    <Route path="/host" component={Host} />
  </Router>
), document.getElementById('host'));
