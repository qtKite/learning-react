import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Jacky'
        }

        console.log('LifecycleA constructor')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate');
    }

    render() {
        console.log('LifeCycleA render');

        return (
            <div>
                Lifeycle A
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
