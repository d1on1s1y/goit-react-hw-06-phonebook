import { ContactsFilter } from './ContactsFilter';
import { ContactsList } from './ContactsList';
import { CreateContacts } from './CreateContacts';

export const Contacts = () => {
  return (
    <>
      <ContactsFilter />
      <CreateContacts />
      <ContactsList />
    </>
  );
};