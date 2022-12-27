import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

import css from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event =>
    dispatch(changeFilter(event.currentTarget.value));

  return (
    <input
      className={css.filterInput}
      type="text"
      name="filter"
      value={filter}
      onChange={handleChange}
      placeholder="search..."
    />
  );
}
