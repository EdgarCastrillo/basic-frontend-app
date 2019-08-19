import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Navbar from '../components/Navbar';
import TopNav from '../components/TopNav.js';
import Button from '../components/Button.js';

class Explore extends Component {
  render() {
    return (
      <section className="profile-container">
        <TopNav/>
         <section className="profile-content">
          <section className="header-profile">
            <section className="title">
              <h2>Hi, Edgar!</h2>
              <a href="/">Edit my profile</a> 
            </section>
            <div className="img-container">
                <img src='/img/personal-trainers/personal-trainer-6.jpg' alt='imageprofile'/>
            </div>
          </section>
          <section className="info-container">
            <p className="sub-title">Name</p>
            <p className="info-profile">Edgar</p>
          </section>
          <section className="info-container">
            <p className="sub-title">Email</p>
            <p className="info-profile">edgar@edgar.com</p>
          </section>
          <section className="info-container">
            <p className="sub-title">Password</p>
            <p className="info-profile">**************</p>
          </section>
          <section className="info-container">
            <p className="sub-title">Are you a personal trainer?</p>
            <a href="/">Change your profile to personal trainer</a>
          </section>
          <Button />
        </section>
        <Navbar/>
      </section>
    )
  }
}

export default withAuth(Explore);