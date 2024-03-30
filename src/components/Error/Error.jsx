import css from './Error.module.css';

export default function Error({ message = '' }) {
  return <b className={css.text}>{message}</b>;
}
