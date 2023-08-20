import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from '../../redux/Contacts.slice';

import s from './Contacts.module.css';

export const CreateContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  

  const [onNewContactName, setOnNewContactName] = useState('');
  const [onNewContactNumber, setOnNewContactNamber] = useState('');

  const addNewContact = () => {
    const newContact = {
      id: nanoid(3),
      name: onNewContactName,
      number: onNewContactNumber,
    };
    const checkContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (checkContact) {
      alert(`${newContact.name} is already used`);
      return;
    }
    dispatch(addContact(newContact));
  };

  return (
    <div className={s.inputBox}>
      <h2 className={s.contactsTitle}>Add contact</h2>
      <input
        className={s.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"
        value={onNewContactName}
        onChange={e => setOnNewContactName(e.target.value)}
      />
      <input
        className={s.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Number"
        value={onNewContactNumber}
        onChange={e => setOnNewContactNamber(e.target.value)}
      />
      <button className={s.submitBtn} type="submit" onClick={addNewContact}>
        Add contact
      </button>
    </div>
  );
};
