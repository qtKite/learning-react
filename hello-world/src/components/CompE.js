import React, { Component } from 'react'
import CompF from './CompF'
import UserContext from './userContext'

export class CompE extends Component {

  static contextType = UserContext
  
  render() {
    return (
      <div>
        Comp E Context {this.context}
        <CompF/>
      </div>
    )
  }
}

export default CompE
