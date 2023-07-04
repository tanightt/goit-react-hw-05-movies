import { Outlet } from 'react-router-dom';
import { NavList, NavItem } from './Layout.styled';
import { Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';

export const Layout = () => {
  return (
    <>
      <header>
        <NavList>
          <li>
            <NavItem to="/">Home</NavItem>
          </li>
          <li>
            <NavItem to="/movies">Movies</NavItem>
          </li>
        </NavList>
      </header>
      <Suspense
        fallback={
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        }
      >
        {' '}
        <Outlet />
      </Suspense>
    </>
  );
};
