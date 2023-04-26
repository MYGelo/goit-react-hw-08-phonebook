import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/Auth/operations';
import css from './Usermenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <span className={css.position}>
      Welcome, {user.name}{' '}
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </span>
  );
};
