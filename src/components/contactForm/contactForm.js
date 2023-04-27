import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'components/Button/Button';
import css from './contactForm.module.css';
import { selectTasks } from 'Redux/selectors';
import { addContact } from 'Redux/operations';
import { BiUser, BiPhone } from 'react-icons/bi';

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectTasks);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.elements.text.value;
    const contactExists = contacts.find(
      contact => contact.name.toLowerCase() === inputValue.toLowerCase()
    );
    if (contactExists) {
      alert(`${inputValue} is already in contacts.`);
      return;
    }
    dispatch(
      addContact({
        name: inputValue,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.container}>
      <div className={css.margin}>
        <span style={{ position: 'absolute' }}>
          <BiUser viewBox="-2 -2 24 24" />
        </span>
        <input
          className={css.inputs}
          type="text"
          name="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.margin}>
        <span style={{ position: 'absolute', margin: '2px 2px 2px 1px' }}>
          <BiPhone viewBox="0 0 22 22" />
        </span>
        <input
          className={css.inputs}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <Button type="submit">Add contact</Button>
    </form>
  );
};
