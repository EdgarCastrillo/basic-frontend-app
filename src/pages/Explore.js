import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Navbar from '../components/Navbar';
import Card from '../components/Card.js';
import TopNav from '../components/TopNav.js';

class Explore extends Component {
  render() {
    return (
      <div className="explore-container">
        <TopNav/>
        <section className="explore-content">
          <div className="title">
           <h2>Personal Trainers</h2> 
          </div>
          <Card />
          <Card />
          <Card />
          <Navbar/>
        </section>
      </div>
    )
  }
}

export default withAuth(Explore);