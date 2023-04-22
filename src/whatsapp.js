import React, { useState } from 'react';

function ContactList({ contacts, deleteContact, editContact }) {
  const [editId, setEditid] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhoneNumber, setEditPhoneNumber] = useState("");

  const saveClick = () => {
    editContact(editId, editName, editEmail, editPhoneNumber);
    setEditid(null);
    setEditName("");
    setEditEmail("");
    setEditPhoneNumber("");
  };

  const cancelClick = () => {
    setEditid(null);
    setEditName("");
    setEditEmail("");
    setEditPhoneNumber("");
  };

  const editClick = (id, name, email, phonenumber) => {
    setEditid(id);
    setEditName(name);
    setEditEmail(email);
    setEditPhoneNumber(phonenumber);
  };

  return (
    <div className="contacts-container">
      <h2>WhatsApp Contacts</h2>
      <ul>
        {contacts.map((contacts, index) => (
          <div className="contact">
          <li key={index}>
            {editId === index ? (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="PhoneNumber"
                  value={editPhoneNumber}
                  onChange={(e) => setEditPhoneNumber(e.target.value)}
                />
                <button onClick={saveClick}>Save</button>
                <button onClick={cancelClick}>Cancel</button>
              </>
            ) : (
              <>
              <div key={contacts.id} className="contact">
                <div className="dp">
                  {contacts.name.charAt(0)}
                </div>
                <div className="info">
                  <h3>{contacts.name}</h3>
                </div>
                </div>
                <div>Email: {contacts.email}</div>
                <div>Phone: {contacts.phonenumber}</div>
                <button onClick={() => deleteContact(index)}>Delete</button>
                
                <button
                  onClick={() =>
                    editClick(
                      index,
                      contacts.name,
                      contacts.email,
                      contacts.phonenumber
                    )
                  }
                >
                  Edit
                </button>
              </>
            )}
          </li>
          </div>
        ))}
      </ul>
    </div>
  );
}




function ContactForm({ contacts, setContacts }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { name, email ,phonenumber };
    setContacts([...contacts, newContact]);
    setName('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label>
        Name:
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label><br/><br/>
      <label>
        Email:
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label><br/><br/>
      <label>
        Phone_Number:
        <input
          type="tel"
          value={phonenumber}
          placeholder="PhoneNumber"
          pattern="[0-9]{10}"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        </label><br/>
      <div className='buttons'>
        <div><button type="submit">Add Contact</button></div>
      </div>
      

    </form>
  );
}

function App() {
  const [contacts, setContacts] = useState([]);

  const deleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const editContact=(id,name,email,phonenumber)=> {
    setContacts((contacts) =>
     contacts.map((contact,index) =>
       index === id ? { ...contact, name, email, phonenumber } : contact
     )
   );
 }

  return (
    <div>
      <ContactList contacts={contacts} deleteContact={deleteContact} editContact={editContact}/>
      <ContactForm contacts={contacts} setContacts={setContacts} />
    </div>
  );
}

export default App;

