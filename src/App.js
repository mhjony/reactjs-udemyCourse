import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char'

class App extends Component {
  state = {
    inputText: ''
  }

  inputHandler = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }

  deleteHandler = (index) => {
    const text = this.state.inputText.split('');
    text.splice(index, 1);
    const updText = text.join('');
    this.setState({ inputText: updText })
  }

  render() {
    const charList = this.state.inputText.split('').map((ch) => {
      return (<Char character={ch}
        key={ch.id}
        clicked={() => this.deleteHandler(ch.id)} />)
    })

    return (
      <div className="App" >
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <input type="text"
          onChange={this.inputHandler} />
        <p>{this.state.inputText}</p>
        <Validation inputLength={this.state.inputText} />
        {charList}
      </div>
    );
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'am a react app'));
  }
}

export default App;

