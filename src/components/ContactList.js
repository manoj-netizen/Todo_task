import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return <div className="ui celled list">
   
   <h3> <input onChange={(e)=> props.multicheck(e.target.checked )} type="checkbox"/>multiple items selector</h3>
    
    <button onClick={()=>props.deletemultipleitems()}>clear items</button>
    {renderContactList}</div>;
};

export default ContactList;
