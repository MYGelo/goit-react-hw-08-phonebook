import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsRefreshing,
  selectIsLoggedIn,
} from 'Redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
