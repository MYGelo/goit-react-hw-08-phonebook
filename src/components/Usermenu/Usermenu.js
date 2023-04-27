import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/Auth/operations';
import css from './Usermenu.module.css';
import { BiLogOut } from 'react-icons/bi';
import { Button } from 'components/Button/Button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <span className={css.position}>
      Hi, {user.name}{' '}
      <Button className={css.btn_style} onClick={() => dispatch(logOut())}>
        <BiLogOut viewBox="2 2 20 20" />
      </Button>
    </span>
  );
}
