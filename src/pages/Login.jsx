import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import PageTitle from '../components/PageTitle/PageTitle';
import css from './Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError } from '../redux/auth/selectors';
import Error from '../components/Error/Error';
import { resetAuthError } from '../redux/auth/slice';

export default function Login() {
  const error = useSelector(selectAuthError);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(resetAuthError());
  }

  return (
    <div className={css.container}>
      <PageTitle>Log in</PageTitle>
      <LoginForm />
      {error && (
        <Error message="Something went wrong. Please, check credentials or try again latter." />
      )}
      <p>
        or{' '}
        <Link to="/register" className={css.link} onClick={handleClick}>
          register
        </Link>
      </p>
    </div>
  );
}
