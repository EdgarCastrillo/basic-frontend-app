import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';

class Explore extends Component {
  render() {
    return (
      <section className="img-container">
        <p className="previous">Previous</p>
        <img src="/img/personal-trainers/personal-trainer-7.jpg" alt=""/>
        <h2 className="trainer-name">Rose</h2>
        <p className="trainer-city">Train in Barcelona</p>
        <span><img className="bookmark" src="/img/icons-bookmark-white.png" alt="bookmark"/></span>
      </section>
    )
  }
}

export default withAuth(Explore);