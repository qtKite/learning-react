import React, { Component } from 'react'

export class LifeCycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Jacky'
        }

        console.log('LifeCycleB constructor')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('LifeCycleB shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('LifeCycleB componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }

    render() {
        console.log('LifeCycleB render');
        
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>Change state</button>
                
            </div>
        )
    }
}

export default LifeCycleB
