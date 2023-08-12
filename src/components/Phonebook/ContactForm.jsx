import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { setStatusContacts } from '../../redux/contactsSlice'
import { setStatusName } from '../../redux/nameSlice'
import { setStatusNumber } from '../../redux/numberSlice'
import { nanoid } from 'nanoid'
import styles from './Phonebook.module.css'
export function ContactForm (){
  const contacts = useSelector(state => state.contacts);
  const name = useSelector(state => state.name);
  const number = useSelector(state => state.number);
    const dispatch = useDispatch();
  
    function hendleChange (event) {
    const { name, value } = event.currentTarget
        switch (name) {
          case 'name':
            dispatch(setStatusName(value))
            break;
          case 'number':
            dispatch(setStatusNumber(value))
            break;
        
          default:
            return;
        }
        
    }

  function hendleSubmit(event) {
    event.preventDefault()
    if (contacts.find(contact =>
      contact.name.toLowerCase() === name.toLowerCase()
    
    )) {
      return alert(`${name} is already in contacts.`)
    }
    dispatch(setStatusContacts({ name, number }))
    reset()
  }
  

      function reset () {
      dispatch(setStatusName(''))
      dispatch(setStatusNumber(''))
  }
    
        return (
        <form onSubmit={hendleSubmit} className={styles.form}>
        <label className={styles.form_label}>
          Name
          <br/><input
  type="text"
        name="name"
        value={name}
                        onChange={hendleChange}
                        className={styles.form_input}
                        
        id={
          nanoid()
        }
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
          </label><br/>
          <label className={styles.form_label}>
            Number
            <br/><input
  type="tel"
              name="number"
              value={number}
                        onChange={hendleChange}
                        className={styles.form_input}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
          </label><br/>
        <button type='submit' className={styles.form_btn}>Add contact</button>
        </form>

    )
}

ContactForm.prototype = {
  hendleSubmit:PropTypes.func.isRequired
}