import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Routes>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </Routes>
      </div>
    );
  }
}
