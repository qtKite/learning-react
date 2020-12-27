import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class HoverCounter extends Component {

    render() {

        let count = this.props.count
        let incrementCount = this.props.incrementCount

        return (
            <div>
                <h2 onMouseOut={incrementCount}>
                    Hovered {count} times
                </h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)
