import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth.js';
import Button from '../components/Button'

class Signup extends Component {

  state = {
    username: '',
    password: '',
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.props.signup({ username, password })
      .then( (user) => {
        console.log(user)
        this.setState({
            username: '',
            password: '',
        });
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <>
      <section>
      <span><p>Previous</p></span>
        <h2>Are you looking for a personal trainer?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Duis eget nibh sed sem tempus 
        pharetra non nec odio.</p>
        <Button route='/signup' color='btn-gradient' title='next'/>
        <h2>Are you a personal trainer?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Duis eget nibh sed sem tempus 
        pharetra non nec odio. </p>
        <Button route='/signup' color='btn-gradient' title='next'/>

        <p>Already have account? 
          <Link to={'/login'}> Login</Link>
        </p>
      </section>
      </>
    )
  }
}

export default withAuth(Signup);


{/* <form onSubmit={this.handleFormSubmit}>
  <label htmlFor='username'>Username:</label>
  <input id='username' type='text' name='username' value={username} onChange={this.handleChange}/>
  <label htmlFor='password'>Password:</label>
  <input id='password' type='password' name='password' value={password} onChange={this.handleChange} />
  <input type='submit' value='Signup' />
</form> */}