import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  line-height: 1.17;
  color: #42949a;
  text-decoration: none;

  padding: 0 3px 2px 3px;

  &.active {
    dispaly: block;
    padding-bottom: 0px;

    color: #e87b07;
    border: 2px solid #e87b07;
  }

  &:hover {
    background-color: #e87b07;

    color: #1f1f1c;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const Nav = styled.nav`
  height: 22px;
  background-color: #1c2530;
`;
