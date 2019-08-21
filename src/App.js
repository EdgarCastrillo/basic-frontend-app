import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute.js';
import AnonRoute from './components/AnonRoute.js';

import Explore from './pages/Explore';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Splash from './pages/Splash';
import Instructions from './pages/Instructions';
import TrainerDetails from './pages/TrainerDetails.js';
import Profile from './pages/Profile.js';
import Bookmarks from './pages/Bookmarks.js';
import Search from './pages/Search.js';
import Calendar from './pages/Calendar.js';

import AuthProvider from './contexts/auth-context.js';

import '../src/SCSS/css/main.css';

import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDyTjiXMb-ZWnEiyOeU0czWUFPeCt-W3us",
  authDomain: "fit-app-bc00a.firebaseapp.com",
  storageBucket: "gs://fit-app-bc00a.appspot.com"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <Router>
        <AuthProvider>
          <section className="main">
            <Switch>
              <AnonRoute path='/' exact component={Splash} />
              <AnonRoute path="/signup" exact component={Signup} />
              <AnonRoute path="/login" exact component={Login} />
              <PrivateRoute path="/explore" exact component={Explore} />
              <PrivateRoute path="/trainer/:id" exact component={TrainerDetails} />
              <PrivateRoute path="/bookmarks" exact component={Bookmarks} />
              <PrivateRoute path="/search" exact component={Search} />
              <PrivateRoute path="/calendar" exact component={Calendar} />
              <PrivateRoute path="/profile" exact component={Profile} />
              <AnonRoute path="/instructions" exact component={Instructions} />
            </Switch>
          </section>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
