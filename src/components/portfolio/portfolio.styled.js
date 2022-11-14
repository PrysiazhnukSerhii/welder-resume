import styled from '@emotion/styled';

export const ListItem = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin: -10px;

  @media screen and (max-width: 767.98px) {
    flex-direction: column;
    align-content: center;
  }
`;

export const Box = styled.div`
  margin-bottom: 5px;
`;

export const Header = styled.h2`
  display: block;

  margin-bottom: 5px;

  color: white;
  font-weight: 500;
  line-height: 1.17;
  text-align: center;
  background-color: #2d394d;
`;
