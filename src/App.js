import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Venues from './components/Venues';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Venues />
      </div>
    );
  }
}
export default App;

