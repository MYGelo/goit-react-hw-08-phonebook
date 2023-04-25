import { useDispatch, useSelector } from 'react-redux';
import { selectLogin } from 'Redux/selectors';
import css from './Login.module.css';
// email:"rozor09@mail.ru"
// name: "RoZor"
//pass: 542-86-91

export default function Login() {
  const dispatch = useDispatch();
  const login = useSelector(selectLogin);
  console.log(login);

  // const currentUser = useSelector(selectCurrentUser);
  return (
    <div className={css.container}>
      <form className={css.container}>
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
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></input>
        <button className={css.btn} type="submit" onClick={() => dispatch()}>
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
