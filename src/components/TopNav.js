import React, { Component } from 'react';
import withAuth from './withAuth.js';

class Navbar extends Component {
  render() {  
    return (
      <div className='top-nav-container'>
        <h3>Fit</h3>
      </div>
    )
  }
}

export default withAuth(Navbar);