import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import H0mePage from "./H0mePage";
// import {BrowserRouter as Router,Route,Link} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <H0mePage/>
        </header>
      </div>
    );
  }
}

export default App;
