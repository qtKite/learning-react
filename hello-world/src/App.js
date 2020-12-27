import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './appStyles.css';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import Counter from './components/Counter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Counter>
            {(count, incrementCount) => (
              <ClickCounter2 count={count} incrementCount={incrementCount} />
            )}
          </Counter>

          <Counter>
            {(count, incrementCount) => (
              <HoverCounter2 count={count} incrementCount={incrementCount} />
            )}
          </Counter>

        </header>
      </div>
    );
  }
}

export default App;
