import { Formik, Form } from 'formik';
import FormInput from '../FormInput/FormInput';
import { useId } from 'react';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const phoneRegExp = /^[0-9]{3}[ \\-][0-9]{3}[ \\-][0-9]{4}$/;

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();
  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
    number: Yup.string()
      .trim()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .matches(phoneRegExp, 'Phone number format is 111-111-1111')
      .required('Required'),
  });

  function handleSubmit(values, actions) {
    dispatch(addContact(values));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formContainer}>
        <FormInput id={nameFieldId} type="text" name="name">
          Name
        </FormInput>

        <FormInput
          id={numberFieldId}
          type="text"
          name="number"
          placeholder="111-111-1111"
        >
          Number
        </FormInput>

        <button className={css.button} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}
