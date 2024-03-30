import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { login } from '../../redux/auth/operations';
import FormInput from '../FormInput/FormInput';
import css from './LoginForm.module.css';
import { useId } from 'react';
import * as Yup from 'yup';

export default function LoginForm() {
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().required('Required'),
    email: Yup.string().email().required('Required'),
  });

  const handleSubmit = values => {
    dispatch(login(values));
    // actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formContainer} autoComplete="off">
        <FormInput id={emailFieldId} type="email" name="email">
          Email
        </FormInput>
        <FormInput id={passwordFieldId} type="password" name="password">
          Password
        </FormInput>
        <button type="submit" className={css.button}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
