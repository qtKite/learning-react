import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './appStyles.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            {/* <PostList/> */}
            <PostForm/>
        </header>
      </div>
    );
  }
}

export default App;
