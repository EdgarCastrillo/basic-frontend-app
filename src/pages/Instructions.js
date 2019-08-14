import React, { Component } from 'react'
import Button from '../components/Button';

class Instructions extends Component {
  render() {
    return (
      <section className='container-secundary'>
        <div className='previous'>
          <button onClick={this.props.history.goBack}>
          <p>Previous</p>
          </button>
        </div>
        <div className='information'>
          <h2>What is fit?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Duis eget nibh sed sem tempus 
          pharetra non nec odio. Maecenas ultrices 
          venenatis ligula, at luctus magna accumsan id. 
          Pellentesque et ipsum egestas, efficitur metus 
          at, dapibus mi. </p>
          <Button route='/signup' color='btn-gradient' title='next'/>
        </div>
      </section>
    )
  }
}

export default Instructions;