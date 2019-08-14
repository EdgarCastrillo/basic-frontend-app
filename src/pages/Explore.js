import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';

class Explore extends Component {
  render() {
    return (
      <div>
        <h2>Welcome</h2>
      </div>
    )
  }
}

export default withAuth(Explore);