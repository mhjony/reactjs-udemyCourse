import React from 'react'
import Person from './Person/Person'

const Persons = (props) => props.person.map((per, index) => {
    return (
        <Person name={per.name}
            age={per.age}
            key={per.id}
            changed={(event) => props.changed(event, per.id)}
            clicked={() => props.clicked(index)} />
    )
})

export default Persons;
