/* eslint-disable react/prop-types */

const Persons = ({persons, onDelete}) => (

    <div>
    {persons.map(
        person => <ul key={person.id}>
            <li>{person.name}: {person.number} <button onClick={() => onDelete(person.id)}>delete</button></li>
        </ul>
    )}
    </div>
)


export default Persons;