import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char'

class App extends Component {
  state = {
    UserInput: ''
  };

  inputChangeHandler = (event) => {
    this.setState({
      UserInput: event.target.value
    })
  }

  deleteHandler = (index) => {
    const text = this.state.UserInput.split('');
    text.splice(index, 1);
    const updateText = text.join('');
    this.setState({ UserInput: updateText });

  }


  render() {
    const charList = this.state.UserInput.split('').map((ch, index) => {
      return (<Char character={ch}
        key={index}
        clicked={() => this.deleteHandler(index)} />)
    })
    return (
      <div className="App" >
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <input type="text"
          onChange={this.inputChangeHandler}
          value={this.state.UserInput} />
        <p>{this.state.UserInput}</p>
        <Validation inputLength={this.state.UserInput.length} />
        {charList}
      </div>
    );
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'am a react app'));
  }
}

export default App;

