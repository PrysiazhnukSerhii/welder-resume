import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/app/App';
import './index.css';

// В BrowserRourer повино ще бути basename="/welder-resume", якщо його не буде то будуть якісь помилки потів на гіті

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/welder-resume-Serhii-Prysiazhniuk">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
