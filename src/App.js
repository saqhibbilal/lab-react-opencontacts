import './App.css';
import data from './contacts.json';
import { useState } from 'react';
import { FaTrophy, FaTrash } from 'react-icons/fa';

function App() {
  const [contacts,setContacts] = useState(data.slice(0,5));
  
  const handleAddContact = ()=>{
    const randomIndex = Math.floor(Math.random() * data.length) + 4;
    const newContact = data[randomIndex];
    setContacts([...contacts,newContact]);
  }

  const handleSortPopularity = ()=>{
    const sortedContacts= [...contacts].sort((a,b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  }

  const handleSortName = ()=>{
    const sortedContacts=[...contacts].sort((a,b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  }


  const handleDelete = (id)=>{
    setContacts(contacts.filter((contact)=>(contact.id !== id)));
  }
  return (
    <div className="App">
      <div className='btn-container'>
        <button className='add-contact btn' onClick={handleAddContact}>Add Random Contact</button>
        <button className='sort-popularity btn' onClick={handleSortPopularity}> Sort by popularity</button> 
        <button className='sort-popularity btn' onClick={handleSortName}> Sort by name</button>           
        
      </div>

      <table className = 'contacts-table'>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=>{
            return (
              <tr className='contact-row' key={contact.id}>
                <td className='contact-picture'>
                  <img src={contact.pictureUrl} alt={contact.name} width={100} height={150} />
                </td>
                <td className='contact-name'>{contact.name}</td>
                <td className='contact-popularity'>{contact.popularity}</td>
                <td className='contact-oscar'>{contact.wonOscar? <FaTrophy style={{ color: "yellow", fontSize: "2rem"}}/>: ""} </td>
                <td className='contact-emmy'>{contact.wonEmmy? <FaTrophy style={{ color: "yellow", fontSize: "2rem"}}/>: ""} </td>
                <td className='delete-contact' onClick={() => handleDelete(contact.id)}><FaTrash style={{ color: "red", fontSize: "2rem" }} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>

       
    </div>
  );
}

export default App;
