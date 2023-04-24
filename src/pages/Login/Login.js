import css from './Login.module.css';

export default function Login() {
  return (
    <div className={css.container}>
      <form className={css.container}>
        <label>Mail</label>
        <input type="mail"></input>
        <label>pass</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></input>
        <button className={css.btn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
