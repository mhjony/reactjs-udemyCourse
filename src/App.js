import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium'
import './App.css';
import Person from './Person/Person';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import { pink } from 'color-name';
import { tsImportEqualsDeclaration } from '@babel/types';
import styled from 'styled-components';

class App extends Component {
  state = {
    person: [
      { id: '1', name: 'Mahmudul', age: 24 },
      { id: '22', name: 'Mehedi', age: 18 },
      { id: '3', name: 'Minhaz', age: 24 }
    ],
    otherValue: 'Some other value',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(ch => {
      return ch.id === id;
    })

    const person = {
      ...this.state.person[personIndex]
    };

    person.name = event.target.value;
    const persona = [...this.state.person];

    persona[personIndex] = person;
    this.setState({ person: persona })

    const doesShow = this.state.showPersons;
    this.setState({
      person: [
        { id: '1', name: 'Mahmudul Hasan', age: 28 },
        { id: '2', name: event.target.value, age: 30 },
        { id: '3', name: 'Minhaz Hoque', age: 28 }
      ],
      otherValue: 'Some other update value',
      showPersons: true
    })
  }

  deleteHandler = (index) => {
    const person = [...this.state.person];
    person.splice(index, 1);
    this.setState({ person: person });
  }

  toggoleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {

    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((per, index) => {
            return (
              <Person name={per.name}
                age={per.age}
                key={per.id}
                changed={(event) => this.nameChangeHandler(event, per.id)}
                clicked={() => this.deleteHandler(index)} />
            )
          })}
        </div>
      )
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    let classes = [];
    if (this.state.person.length <= 2) {
      classes.push('red');
    }
    if (this.state.person.length <= 1) {
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className="button"
          onClick={this.toggoleHandler}>Toggle person</button>
        {persons}
      </div>
    );
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'am a react app'));
  }
}

export default App;

