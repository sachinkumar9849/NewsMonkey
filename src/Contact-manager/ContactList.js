import React from "react";
import ContactCard from "./ContactCard";

function ContactList(props) {

  const renderContlist = props.contacts.map((contact) => {
    return (
     <div>
         <ContactCard contact={contact}/>
     </div>
    );
  });
  return <div>{renderContlist}</div>;
}

export default ContactList;
