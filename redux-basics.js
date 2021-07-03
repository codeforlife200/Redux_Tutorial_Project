const redux = require('redux');


//virtual Reducer 
const initCounter = {
    counter : 0
}

//create a store 
const createStore = redux.createStore;

//Reducer 
const counterReducer = (state = initCounter, action) => {
   switch(action.type){
       case 'INCREMENT':
           return {
               ...state,
               counter : state.counter + 1
           }
       case 'DECREMENT':
           return {
               ...state,
               counter : state.counter -1
           }

       default:
           return state;
   }
}

//attach reducer with your store
const store = createStore(counterReducer);
console.log(store.getState()); //0

store.subscribe(() =>{
    console.log('Subscriber' , store.getState())
})

//action
store.dispatch({type : 'INCREMENT'});
store.dispatch({type : 'DECREMENT'});
store.dispatch({type : 'DECREMENT'});
//console.log(store.getState()); //1

