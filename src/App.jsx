import { Routes, Route } from 'react-router-dom';
// import s from './App.module.css';
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
import { currentThunk } from './redux/thunks';

function App() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(store => store.authPersistReducer);
  useEffect(() => {
    dispatch(currentThunk());
  }, [dispatch]);

  return (
    <Container>
      <AppBar isAuth={isAuth} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<PublicRoute isAuth={isAuth} component={Home} />}
          />
          ;
          <Route
            path="/login"
            element={<PublicRoute isAuth={isAuth} component={Login} />}
          />
          ;
          <Route
            path="/register"
            element={<PublicRoute isAuth={isAuth} component={Register} />}
          />
          ;
          <Route
            path="/contacts"
            element={<PrivateRoute isAuth={isAuth} component={Contacts} />}
          />
          ;
        </Routes>
      </main>
    </Container>
  );
}

export default App;
