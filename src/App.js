import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  buildLocationListItems(locations) {
  };


  render() {
    console.log(this.props.locations);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Elminda</h2>
        </div>

      <button
        onClick={() => this.props.addLocation({ name: 'China', region: 'Asia' })}
        >
        Add Stuff
      </button>

      <table>
        <tr><th>Name</th><th>Location</th></tr>
        { this.buildLocationListItems(this.props.locations) }
      </table>
      </div>
    );
  }
}

export default App;
