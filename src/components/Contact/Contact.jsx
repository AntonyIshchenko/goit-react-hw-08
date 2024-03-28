import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ item }) {
  const dispatch = useDispatch();
  const { id, name, number } = item;

  function handleClick() {
    dispatch(deleteContact(id));
  }

  return (
    <li className={css.item}>
      <div>
        <ContactInfo icon={<IoPersonSharp />}>{name}</ContactInfo>
        <ContactInfo icon={<FaPhone />}>{number}</ContactInfo>
      </div>
      <button className={css.itemButton} onClick={handleClick}>
        Delete
      </button>
    </li>
  );
}

function ContactInfo({ icon, children }) {
  return (
    <p className={css.info}>
      <span className={css.iconWrapper}>{icon}</span>
      <span>{children}</span>
    </p>
  );
}
