import React, { Component } from 'react';
import styled from 'styled-components'
import classes from './Person.css';


class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            //<div className="Person" style={style}>
            <div className={classes.Person}>
                <p onClick={this.props.clicked} > I am {this.props.name} and {this.props.age} years old </p >
                <input type="text"
                    className={classes.text}
                    value={this.props.name}
                    onChange={this.props.changed}></input>
            </div>
        )
    }
};

export default Person;