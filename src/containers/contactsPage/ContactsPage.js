import React from "react";
import { useEffect,useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import {TileList} from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name,setName] = useState('')
 const [phone, setPhone] = useState('')
 const [email, setEmail] = useState('')
 const [isDuplicate, setIsDuplicate] = useState(false)

 const contacts = props.contacts
 const addContact = props.addContact

 useEffect(()=> { 
  const nameIsDuplicate = () => {
    // if(contacts == undefined) return false
    const found = contacts.find((contact) => contact.name === name);
    if (found !== undefined) {
      return true;
    }
    return false
  }
  
  if(nameIsDuplicate())
    setIsDuplicate(true)
  else
    setIsDuplicate(false)
  
 },[name,contacts,isDuplicate])

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(!isDuplicate){
    addContact(name,phone,email)
    setName('')
    setPhone('')
    setEmail('')
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {isDuplicate && "Name already in contact list"}
        <ContactForm 
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
         />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts}/> 
      </section>
    </div>
  );
};
