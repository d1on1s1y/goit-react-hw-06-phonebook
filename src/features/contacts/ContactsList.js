import { selectFilteredContact } from 'features/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../redux/Contacts.slice';
import s from './Contacts.module.css';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContact);

  const deleteContact = id => {
    dispatch(removeContact(id));
  };
  return (
    <ul className={s.contactsList}>
      {filteredContacts.map(contact => {
        return (
          <li key={contact.id} className={s.contactsItem}>
            <p className={s.addedContact}>
              {contact.name}: {contact.number}
            </p>
            <button
              className={s.removeBtn}
              type="button"
              onClick={() => deleteContact(contact.id)}
            >
              Remove contact
            </button>
          </li>
        );
      })}
    </ul>
  );
};