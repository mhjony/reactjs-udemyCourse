import React from 'react';
import styled from 'styled-components'
import classes from './Person.css';


const person = (props) => {
    let rand = Math.random();

    if (rand > .7)
        throw new Error('Something went wrong');
    return (
        //<div className="Person" style={style}>
        <div className={classes.Person}>
            <p onClick={props.clicked} > I am {props.name} and {props.age} years old </p >
            <input type="text" value={props.name} onChange={props.changed}></input>
        </div>
    )
};

export default person;