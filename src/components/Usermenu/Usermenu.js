import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/Auth/operations';
import css from './Usermenu.module.css';

import { BiLogOut } from 'react-icons/bi';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <span className={css.position}>
      Hi, {user.name}{' '}
      <button
        type="button"
        className={css.btn_style}
        onClick={() => dispatch(logOut())}
      >
        <BiLogOut viewBox="2 2 20 20" />
      </button>
    </span>
  );
};
