import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 900px;

  margin: 0 auto;

  @media (max-width: 355px) {
    width: 355px;
  }

  @media (min-width: 355px) and (max-width: 500px) {
    width: auto;
  }

  @media (min-width: 500px) and (max-width: 767px) {
    width: 500px;
  }
`;
