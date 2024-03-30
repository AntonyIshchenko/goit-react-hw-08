import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { useDispatch } from 'react-redux';
import { resetAuthError } from '../../redux/auth/slice';

export default function AuthNav() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(resetAuthError());
  }

  return (
    <div>
      <NavLink className={css.link} to="/register" onClick={handleClick}>
        Register
      </NavLink>
      <NavLink className={css.link} to="/login" onClick={handleClick}>
        Log In
      </NavLink>
    </div>
  );
}
