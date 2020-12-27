import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {

        let message = this.state.isLoggedIn ? "Jacky" : "Guest";

        return (
            <div>
                Welcome {message}
            </div>
        )

    }
}

export default UserGreeting 