import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventCalendar from './containers/eventCalendar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>
        <span className="glyphicon glyphicon-calendar" style={{marginRight: '10px'}}></span>
         My Calendar </h1>
        </header>
        <EventCalendar />
        <footer>
          <hr/>
          </footer>
      </div>
    );
  }
}

export default App;
