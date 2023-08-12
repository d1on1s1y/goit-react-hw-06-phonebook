import { ContactList } from './Phonebook/ContactList'
import { ContactForm } from './Phonebook/ContactForm'
import { Filter } from './Phonebook/Filter'
import styles from './Phonebook/Phonebook.module.css'

export function App(){
    return (
      <div>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm/>
        <h2 className={styles.title}>Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    )
  }
