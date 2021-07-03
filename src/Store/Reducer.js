
//init state
const initState = {
    counter : 100
}

const counterReducer = (state = initState , action ) => {
    switch(action.type){
        case 'INCREMENT':
            return{
                ...state,
                counter : state.counter + 1
            }
        case 'DECREMENT':
            return{
                ...state,
                counter : state.counter - 1
            }
        case 'VALUEINC':
            return{
                ...state,
                counter : state.counter + action.value
            }
        case 'VALUEDEC':
            return{
                ...state,
                counter : state.counter - action.value
            }
        default:
            return state;
    }
}

export default counterReducer;