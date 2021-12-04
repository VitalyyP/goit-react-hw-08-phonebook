import { useState } from 'react';
import s from './Form.module.css';
import {
  useFetchContactsQuery,
  useAddContactMutation,
} from '../../redux/contactsSlice';
import { TextField } from '@material-ui/core';

export default function Form() {
  const [addContactToBase, { isLoading }] = useAddContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useFetchContactsQuery();

  const reset = () => {
    setName('');
    setNumber('');
  };

  const addContact = obj => {
    if (
      data.some(
        contact => contact.name.toLowerCase() === obj.name.toLowerCase(),
      )
    ) {
      alert(`You have already had ${obj.name} in your contacts`);
      return;
    }

    addContactToBase(obj);
    reset();
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
    addContact({ name: name, phone: phoneNumber });
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <label>
          {/* <p className={s.p}>Name</p> */}
          {/* <input
            type="text"
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            onChange={handleInputChange}
          /> */}
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
          {/* <p className={s.p}>Number</p> */}
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
          {/* <input
            type="tel"
            value={number}
            name="number"
            pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
            onChange={handleInputChange}
            required
          /> */}
        </label>
        <button type="submit" className={s.button} disabled={isLoading}>
          Add contact
        </button>
      </form>
    </>
  );
}
