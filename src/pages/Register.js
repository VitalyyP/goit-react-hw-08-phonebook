import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupThunk } from '../redux/thunks';

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
      <h2>Register form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} placeholder="name" onChange={handleChange} />
        <br />
        <input type="mail" name="email" value={email} placeholder="email" onChange={handleChange} />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Singup</button>
      </form>
    </>
  );
}
