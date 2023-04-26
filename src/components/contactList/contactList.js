import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/operations';
import { selectStatusFilter, selectTasks } from 'Redux/selectors';
import css from './contactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectTasks);
  console.log(`contacts`, contacts);

  const filter = useSelector(selectStatusFilter).toLowerCase();
  const dataNormalize = filter.toLowerCase();

  const normalizedContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(dataNormalize)
  );
  const dispatch = useDispatch();
  return (
    <div>
      <ul className={css.contact__list}>
        {normalizedContacts.map(contact => (
          <li key={contact.id} className={css.contact__list__item}>
            <span>{contact.name} : </span>
            <span>{contact.number} </span>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
