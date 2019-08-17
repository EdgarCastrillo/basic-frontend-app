import React, { Component } from 'react';
import withAuth from './withAuth.js';

class Navbar extends Component {
  render() {  
    return (
      <div className='container-nav'>
        <img src="/img/icons-compass.png" alt="explore"/>
        <img src="/img/icons-bookmark.png" alt="bookmarks"/>
        <img src="/img/icons-search.png" alt="search"/>
        <img src="/img/icons-speech-bubble.png" alt="messages"/>
        <img src="/img/icons-profile.png" alt="profile"/>
      </div>
    )
  }
}

export default withAuth(Navbar);