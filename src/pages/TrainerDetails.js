import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Navbar from '../components/Navbar';
import TrainerImages from '../components/TrainerImages.js';
import Button from '../components/Button'

class Explore extends Component {
  render() {
    return (
      <section className="details-container">
        <section className="img-trainer">
          <TrainerImages/>
        </section>
        <section className="details-content">
          <section className="details-section">
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Duis eget nibh sed sem tempus 
            pharetra non nec odio. Duis eget nibh sed sem tempus.</p>
          </section>
          <section className="details-section">
            <h3>Academic degree</h3>
            <ul>
              <li>
                <a href="/" alt="inef">Inef</a>
              </li>
              <li>
                <a href="/" alt="inef">Master in Sports Performance</a>
              </li>
            </ul>
          </section>
          <section className="details-section">
            <h3>Skills</h3>
            <section className='skill'>
                  <img className="skill-img" src="/img/personal-trainers/personal-trainer-4.jpg" alt=""/>
                  <img className="skill-img" src="/img/personal-trainers/personal-trainer-4.jpg" alt=""/>
                  <img className="skill-img" src="/img/personal-trainers/personal-trainer-4.jpg" alt=""/>
                  <img className="skill-img" src="/img/personal-trainers/personal-trainer-4.jpg" alt=""/>
            </section>
          </section>
          <section className="details-section">
            <h3>Where do I train?</h3>
            <ul>
              <li>
                <a href="/" alt="inef">Metropolitan Iradier</a>
              </li>
              <li>
                <a href="/" alt="inef">Street training</a>
              </li>
            </ul>
          </section>
          <section className="book-now">
            <h3 className="book-now-title">Do you want to train with me?</h3>
            <p>Contact with me to schedule a training</p>
            <Button route='#' color='btn-gradient' title='Book now' />
          </section>
        </section>
          <Navbar/>
      </section>
    )
  }
}

export default withAuth(Explore);