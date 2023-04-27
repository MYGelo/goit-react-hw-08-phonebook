import { Loader } from 'components/loader/loader';
import { UserMenu } from 'components/Usermenu/Usermenu';
import { useAuth } from 'hooks';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './Navigation.module.css';

import { BiHome, BiSave } from 'react-icons/bi';

export default function Navigation() {
  const StyledLink = styled(NavLink)`
    &.active {
      color: orange;
    }
  `;
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className={css.header}>
        <nav>
          <StyledLink className={css.nav__link} to="/" end>
            <BiHome />
          </StyledLink>

          {!isLoggedIn && (
            <>
              <StyledLink className={css.nav__link} to="/register" end>
                Register
              </StyledLink>
              <StyledLink className={css.nav__link} to="/login" end>
                Login
              </StyledLink>
            </>
          )}
          {isLoggedIn && (
            <>
              <StyledLink className={css.nav__link} to="/contacts" end>
                <BiSave />
              </StyledLink>
              <UserMenu />
            </>
          )}
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
