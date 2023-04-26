import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsRefreshing,
  selectIsLoggedIn,
} from 'Redux/Auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  console.log(`isLoggedIn`, isLoggedIn);
  console.log(`isRefreshing`, isRefreshing);
  console.log(`user`, user);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
