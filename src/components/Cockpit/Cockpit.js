import React from 'react'
import styles from './Cockpit.css';

const Cockpit = (props) => {
    let classesArray = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = styles.Red;
    }
    if (props.person.length <= 2) {
        classesArray.push(styles.red);
    }
    if (props.person.length <= 1) {
        classesArray.push(styles.bold);
    }
    return (
        <div className={styles}>
            <h1>Hi, I'm a React App</h1>
            <p className={classesArray.join(' ')}>This is really working!</p>
            <button className={btnClass}
                onClick={props.clicked}>Toggle person</button>
        </div>
    )
}

export default Cockpit;