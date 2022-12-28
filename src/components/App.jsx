import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operationsContacts';
import { selectError } from 'redux/selectors';
import Section from 'components/Section';
import PhonebookForm from 'components/PhonebookForm';
import ContactsLayout from 'components/ContactsLayout';

export default function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (error) {
    toast.error('Sorry, something went wrong. Please, try again!');
  }

  return (
    <div>
      <Section title="Phonebook">
        <PhonebookForm />
      </Section>
      <Section title="Contacts">
        <ContactsLayout />
      </Section>
    </div>
  );
}
