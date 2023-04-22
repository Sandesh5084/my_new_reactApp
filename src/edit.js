import React from "react";
import { useState } from "react";

function ContactItem({ contact, deleteContact, editContact }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(contact.name);
    const [editedEmail, setEditedEmail] = useState(contact.email);
  
    const handleDeleteClick = () => {
      deleteContact(contact);
    };
  
    const handleEditClick = () => {
        const newName = prompt('Enter new name:', contact.name);
        const newEmail = prompt('Enter new email:', contact.email);
        if (newName && newEmail) {
            editContact(contact.id, newName, newEmail);

      setIsEditing(true);
    };
  
    const handleCancelClick = () => {
      setIsEditing(false);
      setEditedName(contact.name);
      setEditedEmail(contact.email);
    };
  
    const handleSaveClick = () => {
      const editContact = {
        ...contact,
        name: editedName,
        email: editedEmail
      };
      editContact(contact, editContact);
      setIsEditing(false);
    };
  
    const handleNameChange = (e) => {
      setEditedName(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEditedEmail(e.target.value);
    };
  
    const avatar = contact.name[0].toUpperCase();
  
    return (
      <div>
        {isEditing ? (
          <form onSubmit={handleSaveClick}>
            <input
              type="text"
              placeholder="Name"
              value={editedName}
              onChange={handleNameChange}
            />
            <input
              type="email"
              placeholder="Email"
              value={editedEmail}
              onChange={handleEmailChange}
            />
            <button type="submit">Update</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </form>
        ) : (
          <div>
            <div>{avatar}</div>
            <div>{contact.name}</div>
            <div>{contact.email}</div>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
          </div>
        )}
      </div>
      
    );
  }

  
    
  }
  
export default ContactItem;  