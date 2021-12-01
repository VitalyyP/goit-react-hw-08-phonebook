import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import s from './AppBar.module.css';

export default function AppBar({ isAuth }) {
  return (
    <header className={s.header}>
      <Navigation />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
