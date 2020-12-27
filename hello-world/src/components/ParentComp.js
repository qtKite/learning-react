import React, { Component } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';

export class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Jacky'
        }
    }
    
    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name: 'Jacky'
            })
        }, 2000);
    }

    render() {
        console.log('* parent comp *');
        return (
            <div>
                Parent Comp!
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
