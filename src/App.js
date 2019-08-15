import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute.js';
import AnonRoute from './components/AnonRoute.js';

import Private from './pages/Explore';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Splash from './pages/Splash';
import Instructions from './pages/Instructions';

import AuthProvider from './contexts/auth-context.js';

import '../src/SCSS/css/main.css';

class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <div className="main">
            <Switch>
              <AnonRoute path='/' exact component={Splash} />
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />
              <PrivateRoute path="/private" component={Private} />
              <AnonRoute path="/instructions" exact component={Instructions} />
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
