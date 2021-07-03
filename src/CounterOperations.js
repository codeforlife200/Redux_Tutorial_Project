import React from 'react'

function CounterOperations(props) {
    return (
        <div className='buttons' onClick={props.clicked}>
           {props.msg}
        </div>
    )
}

export default CounterOperations
