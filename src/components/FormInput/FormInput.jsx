import { Field, ErrorMessage } from 'formik';
import css from './FormInput.module.css';

export default function FormInput({
  id,
  type,
  name,
  placeholder = '',
  children,
}) {
  return (
    <div className={css.fieldContainer}>
      <label htmlFor={id}>{children}</label>
      <Field
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={css.input}
      ></Field>
      <span className={css.error}>
        <ErrorMessage name={name} as="span" />
      </span>
    </div>
  );
}
