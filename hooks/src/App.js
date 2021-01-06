import React, { createContext, useReducer } from 'react'
import './App.css';
import DataFetching1 from './components/DataFetching1';
import DataFetching2 from './components/DataFetching2';


function App() {
  return (
    <div className="App App-header">
      <DataFetching2 />
    </div>
  );
}

export default App;

