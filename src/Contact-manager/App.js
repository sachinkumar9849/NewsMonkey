import React, { useEffect, useState } from "react";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";
import "./ContactManager.css";

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  useEffect (()=>{
   const retriveContact =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
   if(retriveContact)setContacts(retriveContact);

  },[]);
  useEffect (()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));

  },[contacts]);

  return (
    <div>
      <AddContact addContactHandler={addContactHandler} />
      <Header />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
