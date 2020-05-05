import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import { pink } from 'color-name';
import { tsImportEqualsDeclaration } from '@babel/types';
import styled from 'styled-components';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

console.log(styles);

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
      return ch.userid === id;
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
    let persons = null;
    let btnClass = [styles.Button];
    console.log(btnClass);

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((per, index) => {
            return (
              <ErrorBoundary key={per.id}>
                <Person name={per.name}
                  age={per.age}
                  changed={(event) => this.nameChangeHandler(event, per.id)}
                  clicked={() => this.deleteHandler(index)} />
              </ErrorBoundary>
            )
          })}
        </div>
      )
      btnClass.push(styles.Red);
      //console.log(btnClass);
    }

    let classesArray = [];
    if (this.state.person.length <= 2) {
      classesArray.push(styles.red);
    }
    if (this.state.person.length <= 1) {
      classesArray.push(styles.bold);
    }
    return (
      <div className={styles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classesArray.join(' ')}>This is really working!</p>
        <button className={btnClass.join(' ')}
          onClick={this.toggoleHandler}>Toggle person</button>
        {persons}
      </div>
    );
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'am a react app'));
  }
}

export default App;

