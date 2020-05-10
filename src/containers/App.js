import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import UserInput from '../components/User/UserInput';
import UserOutput from '../components/User/UserOutput';
import Validation from '../components/Validation/Validation';
import Char from '../components/Char/Char';
import { pink } from 'color-name';
import { tsImportEqualsDeclaration } from '@babel/types';
import styled from 'styled-components';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';


console.log(styles);

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    person: [
      { id: '1', name: 'Mahmudul', age: 24 },
      { id: '22', name: 'Mehedi', age: 18 },
      { id: '3', name: 'Minhaz', age: 24 }
    ],
    otherValue: 'Some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate');
    return true;
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
    console.log('[App.js] render');
    let persons = null;


    if (this.state.showPersons) {
      persons = (
        <Persons
          person={this.state.person}
          changed={this.nameChangeHandler}
          clicked={this.deleteHandler} />
      )
      //btnClass.push(styles.Red);
      //console.log(btnClass);
    }


    return (
      <div className={styles.App}>
        <Cockpit showPersons={this.state.showPersons}
          person={this.state.person}
          clicked={this.toggoleHandler}
        />
        {persons}
      </div>
    );
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'am a react app'));
  }
}

export default App;

