import React from 'react'

/*
function Greet() {
    return <h1>Hello World!</h1>
}
*/

const Greet = props => {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name} uid: {props.uid}</h1>
            <p>{props.children}</p>
        </div>
    )
}


export default Greet;