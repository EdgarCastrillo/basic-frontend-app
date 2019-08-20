import React, { Component } from 'react';
import withAuth from './withAuth.js';
import {Link} from 'react-router-dom'

class Navbar extends Component {
  render() {  
    return (
      <section className='card-container'>
        <h3>{this.props.trainer.name}</h3>
        <section className="skills-content">
          <ul>
          {this.props.trainer.skills.map(skill=> {
            return (
               <li>
                <p>{skill}</p>
              </li>  
            )
          })}
          </ul>
        </section>
        <Link to={`/trainer/${this.props.trainer._id}`}>
          <section className="image-container">
            <span><img className="bookmark" src="/img/icon-bookmark-gradient.png" alt="bookmark"/></span>
              <img src={this.props.trainer.imageUrl} alt=""/>
          </section>
        </Link>
      </section>
    )
  }
}

export default withAuth(Navbar);