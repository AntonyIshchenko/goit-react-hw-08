import { useSelector } from 'react-redux';
import PageTitle from '../components/PageTitle/PageTitle';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import css from './Registration.module.css';
import { selectAuthError } from '../redux/auth/selectors';
import Error from '../components/Error/Error';

export default function Register() {
  const error = useSelector(selectAuthError);
  return (
    <div className={css.container}>
      <PageTitle>Registration</PageTitle>
      <RegistrationForm />
      {error && (
        <Error message="Something went wrong. Maybe, user with this email is already exist or try again latter." />
      )}
    </div>
  );
}
