import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // TODO change this implementation from static to dynamic
  buildLocationRows(locations) {
    return [
      <tr key="name1"><td>name1</td><td>region1</td></tr>,
      <tr key="name2"><td>name2</td><td>region2</td></tr>
      ]
  };


  // TODO change the implementation of the add_location button to retrieve the name and region via form input elements
  render() {
    console.log(this.props.locations);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Elminda</h2>
        </div>

      <button id="add_location"
        onClick={() => this.props.addLocation({ name: 'China', region: 'Asia' })}
        >
        Add Stuff
      </button>

      <table>
        <thead>
          <tr><th>Name</th><th>Location</th></tr>
        </thead>
        <tbody>
          { this.buildLocationRows(this.props.locations) }
        </tbody>
      </table>
      </div>
    );
  }
}

export default App;
