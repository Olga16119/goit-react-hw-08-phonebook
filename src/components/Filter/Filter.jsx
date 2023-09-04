import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/Filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const filterChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={filterChange}
        placeholder="Enter name four search"
      />{' '}
      Find contacts
    </label>
  );
};

export default Filter;
