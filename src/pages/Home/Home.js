import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className={css.container}>
      {isLoggedIn ? (
        <p>
          {user.name}, to see the list of contacts, go to the{' '}
          <Link className={css.link} to="/contacts">
            contacts
          </Link>
        </p>
      ) : (
        <p>
          hello, plase{' '}
          <Link to="/login" className={css.link}>
            login
          </Link>{' '}
          or{' '}
          <Link className={css.link} to="/register">
            register
          </Link>{' '}
          new phonebook list
        </p>
      )}
    </div>
  );
}
