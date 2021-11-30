// import { Link, Routes, Route } from 'react-router-dom';
// import s from './App.module.css';
import Form from '../components/Form';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList/ContactList';
import Container from '../components/Container';
// import { Home } from './pages/Home';
// import { Login } from './pages/Login';
// import { Register } from './pages/Register';
// import { PublicRoute } from './routes/PublicRoute';
// import { PrivateRoute } from './routes/PrivateRoute';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { currentThunk, logoutThunk } from './redux/thunks';
// import UserMenu, { userMenu } from './components/UserMenu/UserMenu';

export function Contacts() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
