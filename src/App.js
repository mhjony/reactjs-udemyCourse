import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    username: 'Mahmudul Hasan Jony'
  };

  nameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App" >
        <UserInput change={this.nameHandler}
          currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Max" />
      </div>
    );
    //return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'am a react app'));
  }
}

export default App;

