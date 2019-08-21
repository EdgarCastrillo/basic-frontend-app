import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Navbar from '../components/Navbar';
import TopNav from '../components/TopNav.js';

class Explore extends Component {
  render() {
    return (
      <section className="explore-container">
        <TopNav/>
        <section className="explore-content">
          <div className="title">
           <h2>My calendar</h2> 
          </div>
          <Navbar/>
        </section>
      </section>
    )
  }
}

export default withAuth(Explore);