import PageTitle from '../components/PageTitle/PageTitle';
import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <PageTitle>
        Contacts Book App{'   '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️🪪📒
        </span>
      </PageTitle>
    </div>
  );
}
