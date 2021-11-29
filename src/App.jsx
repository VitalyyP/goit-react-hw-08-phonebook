import { Link, Routes, Route } from 'react-router-dom';
import s from './App.module.css';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList/ContactList';
import Container from './components/Container';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PublicRoute } from './routes/PublicRoute';
import { PrivateRoute } from './routes/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentThunk, logoutThunk } from './redux/thunks';

const isAuth = false;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <button type="button" onClick={handleLogout}>
              Log out
            </button>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<PrivateRoute isAuth={isAuth} component={Home} />} />;
          <Route path="/login" element={<PublicRoute isAuth={isAuth} component={Login} />} />;
          <Route path="/register" element={<PublicRoute isAuth={isAuth} component={Register} />} />;
        </Routes>
      </main>

      <h1>Phonebook</h1>
      <Form />
      <h2 className={s.contactsTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
