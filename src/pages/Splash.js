import React, { Component } from 'react'
import { Redirect } from 'react-router-dom' 

class Splash extends Component {
  state = {
    showing: true,
  }

  
render() {
    setTimeout( () => {
      this.setState({
        showing:false
      })
    }, 2000)
    return (
      <section className='splash'>
        <section className="splash-logo">
          <h1>Fit</h1>
        </section>
      { this.state.showing ? null : <Redirect to="/login" /> } 
      </section>
    )
  }
}

export default Splash;
