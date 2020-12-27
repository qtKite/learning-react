import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './appStyles.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <ClickCounter />
          <HoverCounter />

        </header>
      </div>
    );
  }
}

export default App;
