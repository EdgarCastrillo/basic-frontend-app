import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Navbar from '../components/Navbar';
import Card from '../components/Card.js';
import TopNav from '../components/TopNav.js';
import trainerService from '../services/trainer-service'

class Explore extends Component {
  state = {
    trainers: [],
  }

  componentDidMount() {
    trainerService.getTrainers()
    .then((trainers) =>{
      this.setState(trainers)
      console.log(this.state.trainers)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <section className="explore-container">
        <TopNav/>
        <section className="explore-content">
          <div className="title">
           <h2>My bookmarks</h2> 
          </div>
          {this.state.trainers.map(trainer=> {
            return (
              <>
                <Card trainer={trainer}/>
              </>
            )
          })}
          <Navbar/>
        </section>
      </section>
    )
  }
}

export default withAuth(Explore);