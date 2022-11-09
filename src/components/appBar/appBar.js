import { StyledLink, Nav } from './appBar.styled';

export function AppBar() {
  return (
    <>
      <Nav>
        <StyledLink to="/resume">Resume</StyledLink>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
        <StyledLink to="/certificates">Сertificates</StyledLink>
      </Nav>
    </>
  );
}
