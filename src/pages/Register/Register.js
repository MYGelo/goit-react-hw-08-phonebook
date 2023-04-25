import css from './Register.module.css';

export default function Register() {
  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const pass = e.target.elements.number.value;
    console.log(name);
    console.log(email);
    console.log(pass);
  };
  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.container}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name..."
        />
        <label>Mail</label>
        <input
          type="email"
          name="email"
          // pattern=".+@globex\.com"
          placeholder="user@ukr.net"
          required
        ></input>
        <label>Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="542-86-91"
        />
        <button className={css.btn} type="submit">
          {' '}
          Register
        </button>
      </form>
    </div>
  );
}
