import PropTypes from 'prop-types';
import { HiOutlineX, HiOutlineDotsHorizontal } from 'react-icons/hi';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/operationsContacts';
import { selectLoadingStatus } from 'redux/selectors';
import css from './ContactItem.module.css';

export default function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoadingStatus);

  const clickedButtonId = useRef(null);

  const handleRemove = () => {
    clickedButtonId.current = id;
    dispatch(removeContact(id));
  };

  const buttonStatus = loading && clickedButtonId.current === id;

  return (
    <li className={css.contactItem}>
      <p className={css.contactText}>
        {name}: {number}
      </p>
      <button
        className={css.deleteButton}
        type="button"
        onClick={handleRemove}
        disabled={buttonStatus}
      >
        {buttonStatus ? (
          <HiOutlineDotsHorizontal size="2em" />
        ) : (
          <HiOutlineX size="2em" />
        )}
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
