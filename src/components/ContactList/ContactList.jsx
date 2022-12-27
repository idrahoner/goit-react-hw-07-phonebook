import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operationsContacts';
import ContactItem from 'components/ContactItem';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const loading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = useSelector(getFilter);

  const filterContacts = () => {
    const query = filter.trim().toLowerCase();

    if (!query) {
      return contacts;
    }

    return contacts.filter(
      ({ name, phone }) =>
        name.toLowerCase().includes(query) || phone.includes(query)
    );
  };

  if (loading && !contacts.length) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul className={css.contactList}>
      {filterContacts().map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} number={phone} />
      ))}
    </ul>
  );
}
