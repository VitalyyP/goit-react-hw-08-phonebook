import PropTypes from 'prop-types';
import s from './Contact.module.css';
import { useState } from 'react';
import { TextField } from '@material-ui/core';
// import Form from '../Form';
import { useDeleteContactMutation } from '../../redux/contactsSlice';
import {
  useFetchContactsQuery,
  useEditContactMutation,
} from '../../redux/contactsSlice';

export default function Contact({ contact }) {
  const [editContactToBase] = useEditContactMutation();
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(contact.id);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.phone);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const { data } = useFetchContactsQuery();

  const editContact = (id, name, number) => {
    setIsEdit(true);
  };

  const editContactByBase = obj => {
    if (
      data.some(
        contact => contact.name.toLowerCase() === obj.name.toLowerCase(),
      )
    ) {
      alert(`You have already had ${obj.name} in your contacts`);
      return;
    }
    console.log({ id, name, number });
    editContactToBase({ id, name, number });
    setIsEdit(false);
  };

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  const makeCorrectFormat = number =>
    `${number.substr(0, 3)}-${number.substr(3, 3)}-${number.substr(6)}`;

  const handleSubmit = event => {
    event.preventDefault();
    let phoneNumber = makeCorrectFormat(number);
    editContactByBase({ name: name, phone: phoneNumber });
  };

  return (
  
    {isEdit ? <li> : <li className={s.item}>}
    <li className={s.item}>
      {isEdit ? (
        <form className={s.form} onSubmit={handleSubmit}>
          <label>
            <TextField
              className={s.input}
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
          <button type="submit" className={s.button}>
            Save
          </button>
          <button type="" className={s.button}>
            Cancel
          </button>
        </form>
      )
        :
        (
        <>
          {contact.name}:{' '}
          <span style={{ textAlign: 'right' }}>{contact.phone}</span>{' '}
          <button
            className={s.button}
            onClick={() =>
              editContact(contact.id, contact.name, contact.number)
            }
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
        </>
        )
      }
    </li>
  );
}

Contact.propTypes = {
  concact: PropTypes.string,
};
