import { Outlet } from 'react-router-dom';
import { NavList, NavItem } from './Layout.styled';

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
      <Outlet />
    </>
  );
};
