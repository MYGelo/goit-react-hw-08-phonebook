import { useAuth } from 'hooks';
import css from './Home.module.css';

export default function Home() {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className={css.container}>
      {isLoggedIn ? (
        <p>
          {user.name}, to see the list of contacts, go to the{' '}
          <a href="https://mygelo.github.io/goit-react-hw-08-phonebook/contacts">
            contacts
          </a>
        </p>
      ) : (
        <p>
          hello, plase{' '}
          <a
            className={css.link}
            href="https:/mygelo.github.io/goit-react-hw-08-phonebook/login"
          >
            login
          </a>{' '}
          or{' '}
          <a
            className={css.link}
            href="http:/https:/mygelo.github.io/goit-react-hw-08-phonebook/register"
          >
            register
          </a>{' '}
          new phonebook list
        </p>
      )}
    </div>
  );
}
