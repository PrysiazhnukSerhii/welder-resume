import styled from '@emotion/styled';

export const Item = styled.li`
  flex-basis: calc((100% - 6 * 10px) / 3);

  height: 300px;
  margin: 10px;
`;

export const Link = styled.a`
  display: block;
`;

export const Picture = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;
