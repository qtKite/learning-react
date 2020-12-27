import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class ClickCounter extends Component {

  render() {
    let count = this.props.count
    let incrementCount = this.props.incrementCount
    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name} Clicked {count} times
        </button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter, 5)
