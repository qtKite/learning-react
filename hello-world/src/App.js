import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './appStyles.css';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import Counter from './components/Counter';
import { UserProvider } from './components/userContext';
import CompC from './components/CompC';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <UserProvider value="Jacky">
              <CompC/>
            </UserProvider>
        </header>
      </div>
    );
  }
}

export default App;
