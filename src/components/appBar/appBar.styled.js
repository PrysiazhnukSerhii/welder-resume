import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  padding-left: 20px;
  height: 22px;

  background-color: #1c2530;

  @media (max-width: 767px) {
    height: 30px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;

  font-weight: 700;
  line-height: 1.17;
  color: #42949a;
  text-decoration: none;

  padding: 0 3px 2px 3px;

  &.active {
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

  @media (max-width: 767px) {
    height: 26px;
  }
`;
