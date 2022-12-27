import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/operationsContacts';
import css from './ContactItem.module.css';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();

  const handleRemove = event => {
    event.currentTarget.textContent = 'Wait';
    dispatch(removeContact(id));
  };

  return (
    <li className={css.contactItem}>
      <p className={css.contactText}>
        {name}: {number}
      </p>
      <button className={css.deleteButton} type="button" onClick={handleRemove}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
