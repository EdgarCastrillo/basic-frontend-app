import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import {withRouter} from 'react-router-dom'
import bookmarkService from '../services/bookmark-service'

class Explore extends Component {
  handleChange = () => {
      bookmarkService.putBookmarks(this.props.data._id)
      .then(response => this.props.me())
      .catch(error => console.log(error))
    }

  render() {
    const trainerId = this.props.data._id
    const currentBookmarks = this.props.user.myBookmarks;
    return (
      <section className="img-container">
        <p className="previous" onClick={this.props.history.goBack}><img className="previous-icon" src="/img/icons8-back-white.png" alt="previous icon" />Previous</p>
        <img src={this.props.data.imageUrl} alt=""/>
        <h2 className="trainer-name">{this.props.data.name}</h2>
        <p className="trainer-city">Train in {this.props.data.city}</p>
        {currentBookmarks.includes(trainerId) ?
        <span onClick={this.handleChange}><img className="bookmark" src="/img/icon-bookmark-gradient.png" alt="bookmark"/></span>
        :<span onClick={this.handleChange}><img className="bookmark" src="/img/icon-bookmark-white.png" alt="bookmark"/></span>}
        
      </section>
    )
  }
}

export default withRouter(withAuth(Explore));
