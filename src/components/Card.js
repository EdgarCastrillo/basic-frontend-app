import React, { Component } from 'react';
import withAuth from './withAuth.js';

class Navbar extends Component {
  render() {  
    return (
      <div className='card-container'>
        <h3>Rose</h3>
        <div>
          <ul>
            <li>
              <a href="/">Inef</a>
            </li>
            <li>
              <a href="/">Musculation</a>
            </li>
            <li>
              <a href="/">Cardio</a>
            </li>
            <li>
              <a href="/">yoga</a>
            </li>
            <li>
              <a href="/">yoga</a>
            </li>
          </ul>
        </div>
        <div className="image-container">
          <span><img className="bookmark" src="/img/icons-bookmark-black.png" alt="bookmark"/></span>
          <img src="/img/personal-trainers/personal-trainer-7.jpg" alt=""/>
        </div>
      </div>
    )
  }
}

export default withAuth(Navbar);