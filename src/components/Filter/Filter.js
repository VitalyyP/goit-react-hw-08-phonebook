import { useDispatch } from 'react-redux';
import { filterContactAction } from '../../redux/actions';
import s from './Filter.module.css';
import { TextField } from '@material-ui/core';
export default function Filter() {
  const dispatch = useDispatch();

  const filterContacts = event => {
    dispatch(filterContactAction(event.currentTarget.value));
  };

  return (
    <div className={s.filter}>
      <label>
        <p>Find contacts by a name:</p>
        <TextField
          className={s.input}
          helperText="Find contacts by a name"
          label="Filter"
          variant="outlined"
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={filterContacts}
          size="small"
          margin="normal"
          InputProps={{
            className: s.inputField,
          }}
        />
      </label>
    </div>
    // <div className={s.filter}>
    //   <label>
    //     <p>Find contacts by name:</p>
    //     <input
    //       type="text"
    //       name="filter"
    //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //       onChange={filterContacts}
    //     />
    //   </label>
    // </div>
  );
}
