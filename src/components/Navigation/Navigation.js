import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => (
  <nav>
    <NavLink to="/" exact className={s.NavLink} activeClassName="NavLink--active">
      Главная
    </NavLink>

    <NavLink to="/contacts" exact className={s.NavLink} activeClassName="NavLink--active">
      Контакты
    </NavLink>
  </nav>
);

export default Navigation;
