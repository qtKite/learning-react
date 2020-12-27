import React, { Component } from 'react'

export class Welcome extends Component {
    render() {
        return (
            <h1>Hi {this.props.name} / {this.props.aka}!</h1>
        )
    }
}

export default Welcome
