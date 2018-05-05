import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Crud} from './Containers/crud';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Crud/>
      </div>
    );
  }
}

export default App;
