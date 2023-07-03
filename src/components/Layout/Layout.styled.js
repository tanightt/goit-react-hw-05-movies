import { NavLink } from 'react-router-dom';

const { styled } = require('styled-components');

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
  margin-bottom: 0;
  list-style: none;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 2px solid grey;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const NavItem = styled(NavLink)`
  &.active {
    color: #c54747;
  }
  &:hover:not(.active) {
    color: #c54747;
    text-decoration: underline;
  }
`;
