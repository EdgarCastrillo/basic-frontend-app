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
    const currentBookmarks = this.props.user.myBookmarks
    return (
      <div className="explore-container">
        <TopNav/>
        <section className="explore-content">
          <section className="title">
           <h2>Personal Trainers</h2> 
          </section>
          {this.state.trainers.map(trainer=> {
            return (
              <>
                { currentBookmarks.includes(trainer._id) ? 
                <Card trainer={trainer} bookmark={true}/>
               : <Card trainer={trainer} bookmark={false}/> 
               }
              </>
            )
          })}
          <Navbar/>
        </section>
      </div>
    )
  }
}

export default withAuth(Explore);