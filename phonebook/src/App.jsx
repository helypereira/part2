import { useState, useEffect } from 'react'
import PersonForm from './components/personForm'
import Persons from './components/persons'
import Filter from './components/filter'
import personService from './services/personService.js'

const App = () => {

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      });
  }, []);

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    if(name === "name"){
      setNewName(value);
      // console.log(value)
    } else if(name === "number"){
      setNewNumber(value);
      // console.log(value)
    } else if(name === "filter"){
      setFilter(value)
    }
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      personService
        .deleteContact(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
      });
    }
  };
  const addContact = (event)=>{
    event.preventDefault();
    const existingContact = persons.find(person => person.name === newName);
    const newContact = {
      //id: persons.length +1 ,
      name: newName,
      number: newNumber,
    };
    
  if(existingContact){
    if(window.confirm(`${newName} is already in the phonebook. Replace the old number with a new one?`)){
      personService
        .updateContactNumber(existingContact.id, newContact)
        .then(updatedContact => {
          setPersons(persons.map(person => person.id !== existingContact.id ? person : updatedContact));
          setNewName('');
          setNewNumber('');
        })
    }
  } else {
    personService
      .createContact(newContact)
      .then(response => {
        //setPersons(persons.concat(response));
        setPersons(prevContact => prevContact.concat(response))
        setNewName('');
        setNewNumber('');
      })
  }}

  // includes() -> determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
  const filterPersons = persons.filter(person => person && person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} handleInputChange={handleInputChange} />
      <h2>Add new</h2>
      <PersonForm addContact={addContact} 
                  handleInputChange={handleInputChange} 
                  newName={newName} newNumber={newNumber}/>
      <h2>Numbers</h2>
      <Persons persons={filterPersons} onDelete={handleDelete}/>
    </div>
  )
}

export default App