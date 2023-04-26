import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut, refreshUser } from 'Redux/Auth/operations';

// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();
  console.log(user);

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
      <button type="button" onClick={() => dispatch(refreshUser())}>
        refreshUser
      </button>
    </div>
  );
};
