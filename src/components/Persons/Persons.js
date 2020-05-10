import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
    render() {
        console.log('[Persons.js] rendering...');
        return this.props.person.map((per, index) => {
            return (
                <Person name={per.name}
                    age={per.age}
                    key={per.id}
                    changed={(event) => this.props.changed(event, per.id)}
                    clicked={() => this.props.clicked(index)} />
            )
        })
    }
}

export default Persons;
