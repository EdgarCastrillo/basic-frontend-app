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
      <section className="explore-container">
        <TopNav/>
        <section className="explore-content">
          <div className="title">
           <h2>My bookmarks</h2> 
          </div>
          {this.state.trainers.map(trainer=> {
            return (
              <>
                { currentBookmarks.includes(trainer._id) ? 
                <Card trainer={trainer} bookmark={true}/>
               : null 
               }
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