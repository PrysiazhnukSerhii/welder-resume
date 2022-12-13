import { Routes, Route, Navigate } from 'react-router-dom';

import { Resume } from '../../pages/resume/resume';
import { Portfolio } from '../../pages/portfolio/portfolio';
import { Certificates } from '../../pages/certificates/certificates';
import { AppBar } from 'components/appBar/appBar';

import { Container } from './app.styled';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/certificates" element={<Certificates />} />

        <Route path="*" element={<Navigate to="/resume" />} />
      </Routes>
    </Container>
  );
};
