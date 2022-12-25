import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { hasInclude } from 'utils';
import css from './PhonebookForm.module.css';

export default function PhonebookForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const inputName = event.currentTarget.name;
    const inputValue = event.currentTarget.value;

    switch (inputName) {
      case 'name':
        return setName(inputValue);
      case 'number':
        return setNumber(inputValue);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isAlreadyHave = hasInclude(name, number, contacts);

    if (isAlreadyHave) {
      return alert(isAlreadyHave + ' is already in contacts.');
    }

    dispatch(addContact(name, number));

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.phonebookForm}>
      <label className={css.formInput}>
        Name
        <input
          className={css.formField}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={css.formInput}>
        Phone
        <input
          className={css.formField}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={css.submitButton} type="submit">
        Add contact
      </button>
    </form>
  );
}
