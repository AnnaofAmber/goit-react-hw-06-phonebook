import css from './Filter.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const handleFilterChange = event => {
    return dispatch(filterContact(event.target.value));
  };
  return (
    <div className={css.filter}>
      <label className={css.label} htmlFor="search">
        Find contacts by name:
      </label>
      <input
        className={css.input}
        id="search"
        name="filter"
        value={filter}
        type="text"
        onChange={handleFilterChange}
      />
    </div>
  );
};
