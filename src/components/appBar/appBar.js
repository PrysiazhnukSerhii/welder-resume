import { StyledLink } from './appBar.styled';

export function AppBar() {
  return (
    <>
      <nav>
        <StyledLink to="/resume">Resume</StyledLink>
        <StyledLink to="/portfolio">Portfolio</StyledLink>
        <StyledLink to="/certificates">Сertificates</StyledLink>
      </nav>
    </>
  );
}
