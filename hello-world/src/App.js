import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './appStyles.css';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ClickCounter2/>
          <HoverCounter2/>
          <User render={(isLoggedIn) => isLoggedIn ? "Jacky" : "Guest"} />
        </header>
      </div>
    );
  }
}

export default App;
