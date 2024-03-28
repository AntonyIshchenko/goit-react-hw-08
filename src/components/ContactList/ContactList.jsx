import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const allContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {allContacts.map(contact => (
        <Contact key={contact.id} item={contact} />
      ))}
    </ul>
  );
}
