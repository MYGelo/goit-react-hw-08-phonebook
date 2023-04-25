import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <p>
        hello, plase{' '}
        <a
          className={css.link}
          href="http://localhost:3000/goit-react-hw-08-phonebook/login"
        >
          login
        </a>{' '}
        or{' '}
        <a
          className={css.link}
          href="http://localhost:3000/goit-react-hw-08-phonebook/register"
        >
          register
        </a>{' '}
        new phonebook list
      </p>
      {/* <div>
        <p>mango@mail.com</p>
        <button>Logout</button>
      </div> */}
    </div>
  );
}
