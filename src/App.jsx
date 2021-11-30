import { Link, Routes, Route } from 'react-router-dom';
import s from './App.module.css';
// import Form from './components/Form';
// import Filter from './components/Filter';
// import ContactList from './components/ContactList/ContactList';
import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Contacts } from './pages/Contacts';
import { PublicRoute } from './routes/PublicRoute';
import { PrivateRoute } from './routes/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { currentThunk, logoutThunk } from './redux/thunks';
// import UserMenu, { userMenu } from './components/UserMenu/UserMenu';

// const isAuth = false;

function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(store => store.authPersistReducer);
  console.log(isAuth);
  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <Container>
      <AppBar isAuth={isAuth} />
      <nav>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacts">
              Contacts
              {/* <h1>They are your contacts!!!</h1>
              <button type="button" onClick={handleLogout}>
                Log out
              </button> */}
            </Link>
          </li>
          <li>
            <Link exact="true" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<PublicRoute isAuth={isAuth} component={Home} />} />;
          <Route path="/login" element={<PublicRoute isAuth={isAuth} component={Login} />} />;
          <Route path="/register" element={<PublicRoute isAuth={isAuth} component={Register} />} />;
          <Route path="/contacts" element={<PrivateRoute isAuth={isAuth} component={Contacts} />} />
          ;
        </Routes>
      </main>
      {/* 
      <h1>Phonebook</h1>
      <Form />
      <h2 className={s.contactsTitle}>Contacts</h2>
      <Filter />
      <ContactList /> */}
    </Container>
  );
}

export default App;
