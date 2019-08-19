import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Navbar from '../components/Navbar';
import TopNav from '../components/TopNav.js';
import SearchComponent from '../components/SearchComponent';

class Explore extends Component {
  render() {
    return (
      <section className="explore-container">
        <TopNav/>
        <SearchComponent />
        <Navbar/>
      </section>
    )
  }
}

export default withAuth(Explore);