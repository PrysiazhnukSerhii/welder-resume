import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  line-height: 1.17;
  color: #42949a;
  text-decoration: none;

  padding: 0 3px;
  &.active {
    dispaly: block;

    color: #e87b07;
    border: 2px solid #e87b07;
  }
`;

export const Nav = styled.nav`
  height: 22px;
  background-color: #1c2530;
`;
