import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" className={s.link} activeclassname={s.activeLink}>
      Главная
    </NavLink>

    <NavLink to="/contacts" className={s.link} activeclassname={s.activeLink}>
      Контакты
    </NavLink>
  </nav>
);

export default Navigation;
