import { useDispatch, useSelector } from "react-redux";
import { setDeleteContacts } from '../../redux/contactsSlice'
import { nanoid } from 'nanoid'
import styles from './Phonebook.module.css'

export const ContactList = () => {

    const contacts = useSelector(state => state.contacts);
      const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

      function onDelete(index) {
    dispatch(setDeleteContacts(index))
      }
      function hendleFind() {
        const normalizedFilter = filters.toLowerCase();
          return (contacts.filter(contact =>
               contact.name.toLowerCase().includes(normalizedFilter)
    ))
      }
    
    const contactsData = hendleFind()
return (
            <ul>
        {contactsData.map(({ name, number }, index) =>           
            <li key={nanoid()} className={styles.item}>
                        <span>{name}: {number}</span>
                        <button type='button' className = {styles.item_btn} onClick={()=>onDelete(index)} key = {index}>Delete</button>
                    </li>
                )}
             </ul>
         )
}