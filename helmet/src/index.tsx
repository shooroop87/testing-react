import { createRoot } from 'react-dom/client';
import { App } from './app';
import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);