import React, { Component } from 'react'
import withAuth from './withAuth';
import updateService from '../services/updates-service'


 class ProfileForm extends Component {
   state= {
    value: this.props.value,
    name: this.props.name
   }

   handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props)
    updateService.updateUser(this.props.user._id, this.props.name, this.state.value)
    .then(response => console.log(response))
    .catch(error => console.log(error))
    this.props.changeStateFather(true, `${this.props.name}State`,this.props.name, this.state.value )
   }

   handleOnChange = (event) => {  
    const {value} = event.target;
    console.log(event.target)
    this.setState({value});
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleOnChange} value={this.state.value} name={this.props.name} />
          <input type="submit" value="edit" />
        </form>
      </div>
    )
  }
}

export default withAuth(ProfileForm);