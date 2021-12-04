import { useDispatch, useSelector } from 'react-redux';
import defaultAvatar from './default-avatar-3.png';
import { logoutThunk } from '../../redux/thunks';
import s from './UserMene.Module.css';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(store => store?.authPersistReducer?.user?.name);
  const avatar = defaultAvatar;

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <div style={styles.container} className={s.UserMenu}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>
        Welcome,
        {` ${name}`}
      </span>
      <button type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}
