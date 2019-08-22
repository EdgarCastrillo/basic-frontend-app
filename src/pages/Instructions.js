import React, { Component } from 'react'
import Button from '../components/Button';

class Instructions extends Component {
  render() {
    return (
      <section className='container-instructions'>
        <div className='previous'>
          <button onClick={this.props.history.goBack}>
          <p className="previous"><img className="previous-icon" src="/img/icons8-back-black.png" alt="previous icon" />Previous</p>
          </button>
        </div>
        <div className='information'>
          <h2>What is fit?</h2>
          <p>Fit is the app that allows to connect personal trainer and athlete, in a reliable, easy and fast way.
          As a personal trainer, get new training by providing your academic training, experience and availability.
          As an athlete, select the personal trainer that best suits your needs, tastes and availability.
          You decide which side you are on.
          </p>
          <Button route='/signup' color='btn-gradient' title='next'/>
        </div>
      </section>
    )
  }
}

export default Instructions;