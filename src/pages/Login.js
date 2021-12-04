import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../redux/thunks';
import s from './Pages.module.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
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
    const user = { email, password };
    dispatch(loginThunk(user));
    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h2 className={s.title}>Please login</h2>
      <p className={s.p}>
        or <a href="/register">Join now</a>
      </p>
      <form onSubmit={handleSubmit}>
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
          Sing in
        </button>
      </form>
    </>
  );
}
