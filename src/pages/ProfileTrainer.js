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
            <p className="info-profile">Castrillo</p>
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
            <p className="sub-title">Country</p>
            <p className="info-profile">Spain</p>
          </section>
          <section className="info-container">
            <p className="sub-title">City</p>
            <p className="info-profile">Barcelona</p>
          </section>
          <section className="info-container">
            <p className="sub-title">City</p>
            <p className="info-profile">Barcelona</p>
          </section>
          <section className="info-container">
            <p className="sub-title">Academic degrees</p>
            <ul>
              <li>
                <a href="/">Inef</a>
              </li>
              <li>
                <a href="/">Master</a>
              </li>
            </ul>
          </section>
          <section className="info-container">
            <p className="sub-title">Description</p>
            <p className="info-profile">Barcelona</p>
          </section>
          <section className="info-container">
            <p className="sub-title">Skills</p>
            <section className='skill'>
                  <img className="skill-img" src="/img/personal-trainers/personal-trainer-4.jpg" alt=""/>
                  <img className="skill-img" src="/img/personal-trainers/personal-trainer-4.jpg" alt=""/>
                  <img className="skill-img" src="/img/personal-trainers/personal-trainer-4.jpg" alt=""/>
                  <img className="skill-img" src="/img/personal-trainers/personal-trainer-4.jpg" alt=""/>
            </section>
          </section>
          <section className="info-container">
            <p className="sub-title">Where do I train?</p>
            <ul>
              <li>
                <a href="/">Metropolitan Iradier</a>
              </li>
              <li>
                <a href="/">Streets</a>
              </li>
            </ul>
          </section>
          <Button />
        </section>
        <Navbar/>
      </section>
    )
  }
}

export default withAuth(Explore);