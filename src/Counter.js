import React, { Component } from 'react'
import CounterOperations from './CounterOperations';
import CounterValue from './CounterValue';
import './App.css';
import {connect} from 'react-redux';

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter : 0
        }
    }

    onIncrement = () =>{
        this.setState((prevState) => { return { counter : prevState.counter + 1}})
    }
    onDecrement = () =>{
        this.setState((prevState) => { return { counter : prevState.counter - 1}})
    }
    onValueInc = () =>{
        this.setState((prevState) => { return { counter : prevState.counter + 10}})
    }
    onValueDec = () =>{
        this.setState((prevState) => { return { counter : prevState.counter - 10}})
    }
    

    render() {
        return (
            <div>
                <CounterOperations msg='INCREMENT' clicked ={this.props.IncrementCounter} />
                <CounterOperations msg='DECREMENT' clicked ={this.props.DecrementCounter} />
                <CounterOperations msg='INCREMENT BY 10' clicked ={this.props.IncrementValue} />
                <CounterOperations msg='DECREMENT BY 10' clicked ={this.props.DecrementValue} />
                <CounterValue value={this.props.newCounter}/>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        newCounter : state.counter
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        IncrementCounter : () => dispatch({type : 'INCREMENT'}),
        DecrementCounter : () => dispatch({type : 'DECREMENT'}),
        IncrementValue : () => dispatch({type : 'VALUEINC' , value:10}),
        DecrementValue : () => dispatch({type : 'VALUEDEC' , value : 10})
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Counter);
