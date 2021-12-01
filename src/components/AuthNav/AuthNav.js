import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" className={s.link} activeclassname={s.activeLink}>
        Регистрация
      </NavLink>

      <NavLink to="/login" className={s.link} activeclassname={s.activeLink}>
        Логин
      </NavLink>
    </div>
  );
}
