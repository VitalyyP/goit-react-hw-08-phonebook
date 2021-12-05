import PropTypes from 'prop-types';
import s from './Contact.module.css';
// import { useState } from 'react';

import { useDeleteContactMutation } from '../../redux/contactsSlice';

export default function Contact({ contact }) {
  // const [isEdit, setIsEdit] = useState(false);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li className={s.item}>
      {/* {isEdit === contact.id ? (
        <form className={s.form} onSubmit={handleSubmit}>
          <label>
            <TextField
              className={s.input}
              helperText="Please enter a name"
              label="Name"
              variant="outlined"
              type="text"
              value={name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
              onChange={handleInputChange}
              size="small"
              margin="normal"
              InputProps={{
                className: s.inputField,
              }}
            />
          </label>
          <label>
            <TextField
              className={s.input}
              helperText="Please enter a number"
              label="Number"
              variant="outlined"
              type="tel"
              value={number}
              name="number"
              pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
              onChange={handleInputChange}
              size="small"
              margin="normal"
              required
              InputProps={{
                className: s.inputField,
              }}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
          </label>
          <button type="submit" className={s.button} disabled={isLoading}>
            Add contact
          </button>
        </form>
      ) : (
        <> */}
      {contact.name}:{' '}
      <span style={{ textAlign: 'right' }}>{contact.phone}</span>{' '}
      <button
        className={s.button}
        // onClick={() => deleteContact(contact.id)}
        disabled
      >
        Edit
      </button>
      <button
        className={s.button}
        onClick={() => deleteContact(contact.id)}
        disabled={isDeleting}
      >
        Delete
      </button>
      {/* </> */}
      {/* )} */}
    </li>
  );
}

Contact.propTypes = {
  concact: PropTypes.string,
};
