import { Contacts } from 'features/contacts/Contacts';
import s from './App.module.css';

export const App = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Contacts book</h1>
      <Contacts />
    </div>
  );
};