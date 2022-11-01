import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    background-color: #0d7bd1;
    border-style: none;
  }
`;
