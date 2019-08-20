import React, { Component } from 'react';
import withAuth from './withAuth.js';
import {Link} from 'react-router-dom'

class Navbar extends Component {
  state = {
    isSaved: false,
  }

  handleChange = () => {
  console.log(this.props.trainer._id)
    if(this.state.isSaved){
      this.setState({
        isSaved: false,
      });
    }  else {
      this.setState({
        isSaved: true,
      });
    }
  }
  

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
          <section className="image-container">
            <span onClick={this.handleChange} value={false}>
              { this.state.isSaved ? <img className="bookmark" src="/img/icon-bookmark-gradient.png" alt="bookmark"/>

              :
              <img className="bookmark" src="/img/icon-bookmark-white.png" alt="bookmark"/>
              }
            </span>
            <Link to={`/trainer/${this.props.trainer._id}`}>
              <img src={this.props.trainer.imageUrl} alt=""/>
            </Link>
          </section>
      </section>
    )
  }
}

export default withAuth(Navbar);