import React, { Component } from 'react';
import withAuth from '../components/withAuth';
import Button from '../components/Button';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state

    this.props.login({ email, password })
    .then( (user) => {
      console.log(user)
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
      <section className='login'>
        <div className='logo'>
          <h1>Fit</h1>
        </div>
        <div className='form-login'>
          <form onSubmit={this.handleFormSubmit}>
            {/* <label htmlFor='username' >Username:</label> */}
            <input id='email' type='text' name='email' placeholder='email' value={email} onChange={this.handleChange}/>
            {/* <label htmlFor='password'>Password:</label> */}
            <input id='password' type='password' name='password' placeholder='password' value={password} onChange={this.handleChange} />
            <Button route='#' type='submit' value='Login' color='btn-white' title='Login' handler={this.handleFormSubmit}/>
          </form>
          <Button route='/instructions' color='btn-white' title='Create new account'/>
        </div>
      </section>
      </>
    )
  }
}

export default withAuth(Login);