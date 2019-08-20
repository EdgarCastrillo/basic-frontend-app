import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import {withRouter} from 'react-router-dom'

class Explore extends Component {
  render() {
    console.log(this.props.data)
    return (
      <section className="img-container">
        <p className="previous" onClick={this.props.history.goBack}><img className="previous-icon" src="/img/icons8-back-white.png" alt="previous icon" />Previous</p>
        <img src={this.props.data.imageUrl} alt=""/>
        <h2 className="trainer-name">{this.props.data.name}</h2>
        <p className="trainer-city">Train in {this.props.data.city}</p>
        <span><img className="bookmark" src="/img/icons-bookmark-white.png" alt="bookmark"/></span>
      </section>
    )
  }
}

export default withRouter(withAuth(Explore));
