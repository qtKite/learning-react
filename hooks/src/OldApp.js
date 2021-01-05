import React, { createContext, useReducer } from 'react'
import './App.css';
import ReducerCompA from './components/useReducer/ReducerCompA';
import ReducerCompB from './components/useReducer/ReducerCompB';
import ReducerCompC from './components/useReducer/ReducerCompC';

export const CountContext = createContext()

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div className="App App-header">
        Count - {count}
        <ReducerCompA />
        <ReducerCompB />
        <ReducerCompC />
      </div>
    </CountContext.Provider>
  );
}

export default App;

