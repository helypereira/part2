import { useState, useEffect } from 'react'
import PersonForm from './components/personForm'
import Persons from './components/persons'
import Filter from './components/filter'
import personService from './services/personService.js'
import Notification from './components/notification.jsx'

const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null);


  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      });
  }, []);

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
        .then((response) => {
          setPersons(persons.filter(person => person.id !== id));
          setNotification(`${response.name} deleted successfully!`);
          setTimeout(() => {
            setNotification(null);
          },3000);
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
          setNotification(`Contact ${updatedContact.name} updated Successfully. New Number ${updatedContact.number}!`);
          setTimeout(() => {
            setNotification(null);
          },3000);
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
        setNotification(`${response.name} Added Successfully!`);
        setTimeout(() => {
          setNotification(null);
        },3000);
      })
  }}

  // includes() -> determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
  const filterPersons = persons.filter(person => person && person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <Notification message={notification}/>
      <h1>Phonebook</h1>
      <div className='container'> 
        <div className='new'>
          <h2 className='subtitle'>Add New Contact</h2>
          <PersonForm addContact={addContact} 
                      handleInputChange={handleInputChange} 
                      newName={newName} newNumber={newNumber}/>
        </div>
        <div className='contactsSection'>
          <h2 className='subtitle'>Contacts</h2>
          <Filter filter={filter} handleInputChange={handleInputChange} />
          <Persons persons={filterPersons} onDelete={handleDelete}/>
        </div>
      </div>
    </div>
  )
}

export default App