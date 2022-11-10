import styled from '@emotion/styled';

export const Item = styled.li`
  flex-basis: calc((100% - 6 * 10px) / 3);

  height: 300px;
  margin: 10px;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Link = styled.a`
  display: block;
`;

export const Picture = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
