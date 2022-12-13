import styled from '@emotion/styled';

export const Header = styled.h2`
  display: block;

  margin-bottom: 5px;

  color: white;
  font-weight: 500;
  line-height: 1.17;
  text-align: center;
  background-color: #2d394d;
`;

export const ContainerDowload = styled.div`
  position: fixed;
  right: 4vw;
  bottom: 4vw;

  z-index: 1;

  display: flex;
  flex-direction: column;
`;

export const LinkCertificates = styled.a`
  margin-bottom: 3px;
  padding: 4px;

  color: white;
  background-color: #2d394d;
  border-radius: 4px;

  &:hover {
    background-color: #e87b07;

    color: #1f1f1c;

    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;
