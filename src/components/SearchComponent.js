import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import trainerService from '../services/trainer-service';
import { Link } from 'react-router-dom'

class Explore extends Component {
  state={
    value: this.props.value,
    trainers: [],
    showingTrainers: [],
    searchValue : null
  }


handleChange = (event) => {  
  const {value} = event.target;
      this.setState({
        value,
        searchValue: value.toLowerCase()
      });
  const newArray = this.state.trainers.filter(trainer => {
    console.log(trainer)
  return trainer.name.toLowerCase().includes(this.state.searchValue) || trainer.city.toLowerCase().includes(this.state.searchValue)
  })
  this.setState({
    showingTrainers: newArray
  })
}

componentDidMount = () => {
  trainerService.getTrainers()
  .then((response) =>{
    this.setState({
      trainers: response.trainers,
      showingTrainers: []
    })
  })
  .catch(error =>{
    console.log(error)
  })
}

  render() {
    console.log(this.state.trainers)
    return (
      <section className="search-container">
        <form>
          <input type="text" placeholder="Search" onChange={this.handleChange} value={this.state.value}/>
        </form>
        <section className="results-container">
          <ul>
            {this.state.showingTrainers ? this.state.showingTrainers.map(trainer => {
              return (
                <Link to={`/trainer/${trainer._id}`}>
                  <li>
                    <h3>{trainer.name}</h3>
                    <section className="image-container">
                      <img src={trainer.imageUrl} alt=""/>
                    </section>
                  </li> 
                </Link> 
              )
              }) : null}
          </ul>
        </section>
      </section>
    )
  }
}

export default withAuth(Explore);