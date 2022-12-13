import styled from '@emotion/styled';

export const Item = styled.li`
  height: 300px;
  margin: 10px;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  @media screen and (min-width: 768px) and (max-width: 1199.98px) {
    flex-basis: calc((100% - 4 * 15px) / 2);
  }

  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 6 * 10px) / 3);
  }
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
