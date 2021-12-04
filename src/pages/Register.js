import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupThunk } from '../redux/thunks';
import s from './Pages.module.css';

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={s.input}
          name="name"
          value={name}
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="mail"
          className={s.input}
          name="email"
          value={email}
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className={s.input}
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit" className={s.button}>
          Sing up
        </button>
      </form>
    </>
  );
}
