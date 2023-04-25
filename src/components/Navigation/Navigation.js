import { useAuth } from 'hooks/useAuth';
import { Loader } from 'components/loader/loader';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './Navigation.module.css';

export default function Navigation() {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);

  const StyledLink = styled(NavLink)`
    &.active {
      color: orange;
    }
  `;
  return (
    <>
      <header className={css.header}>
        <nav>
          <StyledLink className={css.nav__link} to="/" end>
            Home
          </StyledLink>
          <StyledLink className={css.nav__link} to="/register" end>
            Register
          </StyledLink>
          <StyledLink className={css.nav__link} to="/login" end>
            Login
          </StyledLink>

          {/* {isLoggedIn && ( */}
          <StyledLink className={css.nav__link} to="/contacts" end>
            Contacts
          </StyledLink>
          {/* )} */}
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
