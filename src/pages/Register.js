import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupThunk } from '../redux/thunks';
import s from './Pages.module.css';
import { TextField } from '@material-ui/core';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        alert('Check input name please');
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const user = { name, email, password };
    dispatch(signupThunk(user));
    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h2 className={s.title}>Join now</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          type="text"
          className={s.input}
          helperText="Please enter your name"
          label="Name"
          variant="outlined"
          required
          name="name"
          value={name}
          onChange={handleChange}
          size="small"
          margin="normal"
          InputProps={{
            className: s.inputField,
          }}
        />
        <TextField
          fullWidth
          type="mail"
          className={s.input}
          helperText="Please enter your email"
          label="Email"
          variant="outlined"
          required
          name="email"
          value={email}
          onChange={handleChange}
          size="small"
          margin="normal"
          InputProps={{
            className: s.inputField,
          }}
        />
        <TextField
          fullWidth
          type="password"
          className={s.input}
          helperText="Please enter your password"
          label="Password"
          variant="outlined"
          required
          name="password"
          value={password}
          onChange={handleChange}
          size="small"
          margin="normal"
          InputProps={{
            className: s.inputField,
          }}
        />
        <button type="submit" className={s.button}>
          Sing up
        </button>
      </form>
    </>
  );
}
