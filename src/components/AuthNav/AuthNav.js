import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={s.AuthNav}>
      <NavLink
        to="/login"
        className={navData => (navData.isActive ? s.activeLink : s.link)}
      >
        Sign in
      </NavLink>
      <NavLink
        to="/register"
        className={navData => (navData.isActive ? s.activeLink : s.link)}
      >
        Sign up
      </NavLink>
    </div>
  );
}
