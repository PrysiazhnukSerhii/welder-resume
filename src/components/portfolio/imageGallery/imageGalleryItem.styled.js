import styled from '@emotion/styled';

export const Item = styled.li`
  flex-basis: calc((100% - 6 * 15px) / 3);

  height: 300px;
  margin: 10px;
`;

export const Picture = styled.img`
  width: 270px;
  height: 300px;
  object-fit: cover;
`;
