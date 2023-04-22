import React from 'react';
import './App.css';

function Whatsapp() {
  const contacts = [
    { id:1, name: 'Akash', status: 'Hey there! I am using WhatsApp.' },
    { id:2, name: 'Chetan', status: 'At work' },
    { id:3, name: 'Sammed', status: 'Busy' },
    { id:4, name: 'Tushar', status: 'Sleeping' },
  ];
 
  return (
    <div className="contacts-container">
      <h2>Contacts on WhatsApp</h2>
      {contacts.map((contact) => (
        <div key={contacts.id} className="contact">
          <div className="dp">
          {contact.name.charAt(0)}
          </div>
          <div className="info">
            <h3>{contact.name}</h3>
            <p>{contact.status}</p>
          </div>
        </div>
      ))}
    </div>

  );
}

export default Whatsapp;
