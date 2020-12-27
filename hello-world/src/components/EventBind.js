import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Hello'
        }

        // bind in constructor (best approach)
        // this.clickHandler = this.clickHandler.bind(this);
    }
    
    // class property as arrow function
    // experimental feature
    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
