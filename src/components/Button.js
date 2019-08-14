import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Button extends Component {
  
  render() {
    return (
      <Link to={this.props.route}>
        <button
        type={this.props.type}
        value={this.props.value}
        className={this.props.color}
        onClick={this.props.handler}
        ><h3>{this.props.title}</h3>
        </button>
      </Link>
    )
  }
}

export default Button;