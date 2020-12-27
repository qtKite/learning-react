import React from 'react'

function MemoComp(props) {

    console.log('Rendering Memo');

    return (
        <div>
            {props.name}
        </div>
    )
}

export default React.memo(MemoComp)
