import { NavLink } from 'react-router-dom';

// потрібно розібратися чи треба коли ти робиш по реакту сайт дотримуватися семантики HTML

export function Portfolio() {
  return (
    <>
      <h2>Portfolio</h2>
      <NavLink to="/resume">To resume</NavLink>
      <NavLink to="/certificates">To certificates</NavLink>
    </>
  );
}
