import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectLoadingStatus } from 'redux/selectors';
import { addContact } from 'redux/operationsContacts';
import { hasInclude } from 'utils';
import css from './PhonebookForm.module.css';

export default function PhonebookForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoadingStatus);
  const dispatch = useDispatch();

  const handleChange = event => {
    const inputName = event.currentTarget.name;
    const inputValue = event.currentTarget.value;

    switch (inputName) {
      case 'name':
        return setName(inputValue);
      case 'number':
        return setPhone(inputValue);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isAlreadyHave = hasInclude(name, phone, contacts);

    if (isAlreadyHave) {
      return alert(isAlreadyHave + ' is already in contacts.');
    }

    dispatch(addContact({ name, phone }));

    setName('');
    setPhone('');
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
          value={phone}
          onChange={handleChange}
        />
      </label>
      <button className={css.submitButton} type="submit" disabled={loading}>
        Add contact
      </button>
    </form>
  );
}
