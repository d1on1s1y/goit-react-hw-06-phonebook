import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/Contacts.slice';
import s from './Contacts.module.css';

export const ContactsFilter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onFilterChanged = filter => {
    dispatch(setFilter(filter));
  };

  return (
    <>
      <input
        className={s.filterInput}
        placeholder="Search contact"
        onChange={e => onFilterChanged(e.target.value)}
        value={filter}
      />
    </>
  );
};