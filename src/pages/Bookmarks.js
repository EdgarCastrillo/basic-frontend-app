import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import Navbar from '../components/Navbar';
import Card from '../components/Card.js';
import TopNav from '../components/TopNav.js';
import trainerService from '../services/trainer-service'
import {Link} from 'react-router-dom'

class Explore extends Component {
  state = {
    trainers: [],
    haveBookmarks: false,
  }

  componentDidMount() {
    trainerService.getTrainers()
    .then((trainers) =>{
      this.setState(trainers)
      console.log(this.state.trainers)
      this.haveBookmarks()
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  haveBookmarks = () => {
    this.state.trainers.forEach((trainer) => { 
      if(this.props.user.myBookmarks.includes(trainer._id)){
      this.setState({
        haveBookmarks: true,
      }) 
    }})
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
          {!this.state.haveBookmarks?
          <section className="add-bookmark-text">
            <Link to="/explore">
              <img className="bookmark" src="/img/icon-bookmark-gradient.png" alt="bookmark"/>
            </Link>
            <p className="bookmarks-text">You don't have bookmarks</p>  
            <Link to="/explore">
              <p>Add bookmarks</p>
            </Link>
          </section>
          : null
          }
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