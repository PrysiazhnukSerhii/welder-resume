import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 900px;

  margin-left: auto;
  margin-right: auto;

  @media (max-width: 400px) {
    width: 400px;
  }

  @media (min-width: 400px) and (max-width: 767px) {
    width: 100%;
  }
`;
