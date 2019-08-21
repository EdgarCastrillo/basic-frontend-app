import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Navbar from '../components/Navbar';
import TopNav from '../components/TopNav.js';
import SearchComponent from '../components/SearchComponent';
import Card from '../components/Card.js';
import trainerService from '../services/trainer-service'

class Explore extends Component {
  state = {
    trainers: [],
  }

  componentDidMount() {
    trainerService.getTrainers()
    .then((trainers) =>{
      console.log(trainers.trainers)
      const sortTrainers = trainers.trainers.sort((a,b) => { 
      return new Date(b.created_at) - new Date(a.created_at);
      })
      this.setState({trainers:sortTrainers})
      console.log(this.state.trainers)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <section className="search-container">
        <TopNav/>
        <section className="search-content">
          <section className="title">
            <h2>Search</h2> 
          </section>
          <section className="search-input">
            <SearchComponent />
          </section>
          <section className="search-by-date">
            <section className="title">
              <h2>Last trainers</h2> 
            </section>
            {this.state.trainers.map(trainer=> {
              return (
                <>
                  <Card trainer={trainer}/>
                </>
              )
            })}
          </section>
        </section>
        <Navbar/>
      </section>
    )
  }
}

export default withAuth(Explore);