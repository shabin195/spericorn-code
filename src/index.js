import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import login from '../src/user/login';
import registration from '../src/user/registration';
import profile from '../src/user/profile';
ReactDOM.render((
  <Router>
    <Route exact path="/" component={login} />
    <Route exact path="/registration" component={registration} />
    <Route exact path="/profile" component={profile} />
  </Router>
),
  document.getElementById('root')
);
reportWebVitals();
