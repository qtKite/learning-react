import React, { createContext, useReducer } from 'react'
import './App.css';

import UserForm from './components/Custom Hook/UserForm';


function App() {
  return (
    <div className="App App-header">
      <UserForm/>
    </div>
  );
}

export default App;