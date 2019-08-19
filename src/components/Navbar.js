import React, { Component } from 'react';
import withAuth from './withAuth.js';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {  
    return (
      <div className='container-nav'>
        <Link to="/explore"><img src="/img/icons-compass.png" alt="explore"/></Link>
        <Link to="/bookmarks"><img src="/img/icons-bookmark-black.png" alt="bookmarks"/></Link>
        <Link to="/search"><img src="/img/icons-search.png" alt="search"/></Link>
        <Link to="/messages"><img src="/img/icons-speech-bubble.png" alt="messages"/></Link>
        <Link to="/profile"><img src="/img/icons-profile.png" alt="profile"/></Link>
      </div>
    )
  }
}

export default withAuth(Navbar);