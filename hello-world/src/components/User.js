import React, { Component } from 'react'

/*
Render Props refers to a technique for sharing code between React components using
a prop whose value is a function.
*/
export class User extends Component {
  render() {
    return (
      <div>
        {this.props.render(true)}
      </div>
    )
  }
}

export default User
