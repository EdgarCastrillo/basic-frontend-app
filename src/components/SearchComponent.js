import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import trainerService from '../services/trainer-service';

class Explore extends Component {
  state={
    value: this.props.value,
    trainers: [],
    showingTrainers: []
  }


handleChange = (event) => {  
  const {value} = event.target;
  this.setState({value});
  const newArray = this.state.trainers.trainers.map(trainer => {
    if(trainer.name.includes(this.state.value) || trainer.city.includes(this.state.value)){
      return trainer
    }
    else{
      return null
    }
  })
  this.setState({
    showingTrainers: newArray
  })
}

componentDidMount = () => {
  trainerService.getTrainers()
  .then((response) =>{
    console.log(response)
    this.setState({
      trainers: response,
      showingTrainers: response
    })
  })
  .catch(error =>{
    console.log(error)
  })
}

  render() {
    // console.log(this.state.trainers)
    console.log(this.state.showingTrainers)
    return (
      <section className="search-container">
        <form>
          <input type="text" placeholder="Search" onChange={this.handleChange} value={this.state.value}/>
        </form>
        <section className="results-container">
          <p></p>
        </section>
      </section>
    )
  }
}

export default withAuth(Explore);