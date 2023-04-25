import { useDispatch } from 'react-redux';
import { login } from 'Redux/operations';

import css from './Login.module.css';

// email: "rozor_10@mail.ru"
// name :"Oleg"
// pass: 5428691

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.element.email.value,
        password: form.element.password.value,
      })
    );
    form.reset();
  };
  return (
    <div className={css.container}>
      <form className={css.container} onSubmit={handleSubmit}>
        <label>Mail</label>
        <input
          type="email"
          name="email"
          // pattern=".+@globex\.com"
          placeholder="user@ukr.net"
          required
        ></input>
        <label>pass</label>
        <input
          type="password"
          name="password"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></input>
        <button className={css.btn} type="submit">
          Login
        </button>
      </form>

      <div>
        <span> user</span>
        {/* {currentUser.map(user => ( */}
        {/* <p>{user.name}</p> */}
        {/* ))} */}
      </div>
    </div>
  );
}
