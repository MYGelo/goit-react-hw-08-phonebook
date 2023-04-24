import css from './Register.module.css';

export default function Register() {
  return (
    <div className={css.container}>
      <form className={css.container}>
        <label>Name</label>
        <input
          type="text"
          name="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // placeholder="Enter name..."
        />
        <label>Mail</label>
        <input type="mail" name="mail" required></input>
        <label>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // placeholder="Enter number..."
        />
        <button className={css.btn} type="submit">
          {' '}
          Register
        </button>
      </form>
    </div>
  );
}
