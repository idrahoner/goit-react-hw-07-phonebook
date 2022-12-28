import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operationsContacts';
import Section from 'components/Section';
import PhonebookForm from 'components/PhonebookForm';
import ContactsLayout from 'components/ContactsLayout';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
