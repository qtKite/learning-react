import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const persons = [
        { id: 1, name: 'Jacky', age: 19 },
        { id: 2, name: 'Ben', age: 18 }
    ]
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2> )
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
