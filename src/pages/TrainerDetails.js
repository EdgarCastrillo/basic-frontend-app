import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Navbar from '../components/Navbar';
import TrainerImages from '../components/TrainerImages.js';
import Button from '../components/Button'
import trainerService from '../services/trainer-service'

class Explore extends Component {
  state = {
    trainer: {}
  }

  componentDidMount() {
    trainerService.getTrainerById(this.props.match.params.id)
    .then((trainer) =>{
      console.log(trainer.trainer)
      this.setState({trainer: trainer.trainer})
    })
    .catch((error) => {
      console.log(error)
    })
  }


  render() {
    const {trainer} = this.state
    return (
      <section className="details-container">
        <section className="img-trainer">
          <TrainerImages data={trainer}/>
        </section>
        <section className="details-content">
          <section className="details-section">
            <h3>Description</h3>
            <p>{trainer.description}</p>
          </section>
          <section className="details-section">
            <h3>Academic degree</h3>
            <p>{trainer.academic}</p>
          </section>
          <section className="details-section">
            <h3>Skills</h3>
            <ul>
            {trainer.skills ? (trainer.skills.map(skill=> {
              return (
                <li>
                  <p>{skill}</p>
                </li>  
                )
              })) : null}
            </ul>
          </section>
          <section className="details-section">
            <h3>Where do I train?</h3>
            {trainer.train}
          </section>
          <section className="book-now">
            <h3 className="book-now-title">Do you want to train with me?</h3>
            <p>Contact with me to schedule a training</p>
            <section className="btn-book-now">
              <Button route='#' color='btn-gradient' title='Book now' />
            </section>
          </section>
        </section>
          <Navbar/>
      </section>
    )
  }
}

export default withAuth(Explore);