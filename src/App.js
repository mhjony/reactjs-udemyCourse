import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state =
    {
      persons: [
        { name: 'Mahmudul', age: '82' },
        { name: 'Mehedi', age: '12' }
      ]
    }
  render() {
    return (
      <div className="App" >
        <h1>Hi, I am a react app</h1>
        <button>Switch</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My brother</Person>
      </div>
    );
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'am a react app'));
  }
}

export default App;
