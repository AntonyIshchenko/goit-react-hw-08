import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';
import { logout } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  console.log(user);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Link to="/profile">Profile</Link>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
