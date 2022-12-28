import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/operationsContacts';
import { selectLoadingStatus } from 'redux/selectors';
import css from './ContactItem.module.css';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);

  let clickedButtonId = useRef(null);

  const handleRemove = event => {
    event.currentTarget.textContent = 'Wait';
    clickedButtonId = id;
    dispatch(removeContact(id));
  };

  return (
    <li className={css.contactItem}>
      <p className={css.contactText}>
        {name}: {number}
      </p>
      <button
        className={css.deleteButton}
        type="button"
        onClick={handleRemove}
        disabled={loading}
      >
        {loading && clickedButtonId === id ? 'Wait' : 'Delete'}
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
