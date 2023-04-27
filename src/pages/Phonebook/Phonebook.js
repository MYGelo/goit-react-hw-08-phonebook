import { ContactsForm } from 'components/contactForm/contactForm';
import { ContactList } from 'components/contactList/contactList';
import { ContactFilter } from 'components/Filter/Filter';
import { Loader } from 'components/loader/loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'Redux/operations';
import { selectError, selectIsLoading } from 'Redux/selectors';
import css from './Phonebook.module.css';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.one}>
      <h1>Phonebook</h1>
      <ContactsForm></ContactsForm>
      <h2>Contacts</h2>
      <ContactFilter></ContactFilter>
      <ContactList />
      {isLoading && !error && <Loader />}
    </div>
  );
}
