import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state =
    {
      persons: [
        { name: 'Mahmudul', age: '82' },
        { name: 'Mehedi', age: '12' }
      ],
      otherState: 'some other value'
    }

  clickNameHendler = () => {
    this.setState({
      persons: [
        { name: 'Mahmudul Hasan', age: '28' },
        { name: 'Mehedi Hasan', age: '18' }
      ]
    })
  }
  render() {
    return (
      <div className="App" >
        <h1>Hi, I am a react app</h1>
        <button onClick={this.clickNameHendler}>Switch</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My brother</Person>
        <Person name={this.state.otherState} />
      </div>
    );
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'am a react app'));
  }
}

export default App;
