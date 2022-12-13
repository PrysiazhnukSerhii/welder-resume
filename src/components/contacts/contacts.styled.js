import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  justify-content: center;

  padding: 10px 0;

  background-color: #1c2530;

  & :last-child {
    margin-left: 15px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;

    & :last-child {
      margin-left: 0px;
    }
  }
`;

export const ContactsLink = styled.a`
  display: flex;
  align-items: center;
  padding: 4px;

  color: white;

  & :last-child {
    margin-left: 5px;
  }

  &:hover {
    color: #2196f3;
  }

  @media (max-width: 767px) {
    align-items: flex-end;
  }
`;
