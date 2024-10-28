/* eslint-disable no-undef */
import { useState } from 'react'
import ContactsTable from './ContactsTable';
import Filter from './Filter';
import PersonForm from './PersonForm';
import { useEffect } from 'react';
import phoneServices from './services/phone'
import Notification from './Notification';

function App() {
  //contacts is an array of objects which has name and number in it
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  //these states are used as a controlled state which controls our input types
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filterName, setFilterName] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(true);
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //post request and put request to the URL is here
  const addContactInfo = (e) => {
    e.preventDefault();
    let contact = { name: name, number: number };
    //find a number which already exists in the object
    const existingContact = contacts.find((contact) => (contact.name.toLowerCase().includes(name.toLowerCase())));
    const existingNumber = contacts.find((contact) => contact.number == number);
    if (existingContact) {
      if (confirm(`${name} already exists, do you want ro replace old number with new number ? `) && !existingNumber) {
        phoneServices.updateNumber(existingContact, number).then((res) => {
          console.log(res.data)
          setSuccess(true)
          setContacts(res.data);
          setName('');
          setNumber('');
          setMessage(`Contact updated for ${name}`)
          
          setTimeout(()=>{
            setMessage('');
          }, 5000)
          
        }).catch((e) => setMessage(e.message))
      } else {
        alert(`${number} already exists for some other contact`)
        setName('');
        setNumber('');
      }
    } else {

      phoneServices.create(contact).then((res) => {
        //we used res.data because we need the server generated id
        console.log(res.data)
        setSuccess(true)
        setContacts(res.data);
        setName('');
        setNumber('');
        
        setMessage(`Added ${name}`)
         
          setTimeout(()=>{
            setMessage('');
          }, 5000)
      }).catch((e) => console.log(e.message))
    }

  }
  //injecting the current name from the input element
  const setNameField = (e) => {
    setName(e.target.value);
  }
  //injecting the current number from the input element
  const setNumberField = (e) => {
    setNumber(e.target.value);
  }

  //filter names based on search
  const filterNames = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setFilterName(filterValue);
    // Filter contacts based on the current input value
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
    // Don't update the original contacts, just display the filtered ones
    setFilteredContacts(filteredContacts);
    // You might want to store this in a separate state or use it directly in your render
  };

  //fetch the contacts from server
  useEffect(() => {
    phoneServices.getAll()
      .then((res) => setContacts(res.data))
      .catch((e) => console.log(e.message));
  }, []);


  //delete function will be created here
  const deletePhone = (id, name) => {
    const isRemove = window.confirm(`Do you want to delete ${name} ? `);
    if (isRemove) {

      phoneServices.deletePhone(id)
        .then(() => {
          const filteredContacts = contacts.filter(contact => contact._id !== id)
          setContacts(filteredContacts)
        }).catch((e)=>{
          setSuccess(false)
          setMessage(`${name} has already been removed from the server`)
          const filteredContacts = contacts.filter(contact => contact._id !== id)
          setContacts(filteredContacts)
          console.log(e);
                    
          setTimeout(()=>{
            setMessage('');
          }, 5000)

        })
    }

  }


  return (
    <div>
      <h1>Phone Book</h1>
      {/* notifications here */}
      <Notification message={message} classname={success ? 'success' : 'fail'} />
      {/* filter here */}
      <Filter filterName={filterName} filterNamesFunction={filterNames} />

      {/* form here */}
      <PersonForm addContactInfo={addContactInfo} name={name} setNameField={setNameField} number={number} setNumberField={setNumberField} />
      <br></br>
      {/* table here */}
      <ContactsTable contacts={filterName == '' ? contacts : filteredContacts} deleteFunction={deletePhone} />
    </div>
  )
}

export default App
