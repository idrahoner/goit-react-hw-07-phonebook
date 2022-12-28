import { useSelector } from 'react-redux';
import {
  selectLoadingStatus,
  selectContacts,
  selectError,
} from 'redux/selectors';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

export default function ContactsLayout() {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoadingStatus);
  const error = useSelector(selectError);

  if (error) {
    return console.log('error.message: ', error.message);
  }

  if (loading && !contacts.length) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Filter />
      <ContactList />
    </div>
  );
}
