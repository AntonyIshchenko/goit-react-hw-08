import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { register } from '../../redux/auth/operations';
import FormInput from '../FormInput/FormInput';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';
import { useId } from 'react';

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
    password: Yup.string().trim().min(4, 'Too short!').required('Required'),
    email: Yup.string().trim().email().required('Required'),
  });

  const handleSubmit = values => {
    dispatch(register(values));
    // actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formContainer} autoComplete="off">
        <FormInput id={nameFieldId} type="text" name="name">
          Username
        </FormInput>

        <FormInput id={emailFieldId} type="email" name="email">
          Email
        </FormInput>

        <FormInput id={passwordFieldId} type="password" name="password">
          Password
        </FormInput>

        <button type="submit" className={css.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
