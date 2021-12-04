import { useDispatch } from 'react-redux';
import { filterContactAction } from '../../redux/actions';
import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();

  const filterContacts = event => {
    dispatch(filterContactAction(event.currentTarget.value));
  };

  return (
    <div className={s.filter}>
      <label>
        <p>Find contacts by name:</p>
        <input
          type="text"
          name="filter"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          onChange={filterContacts}
        />
      </label>
    </div>
  );
}
