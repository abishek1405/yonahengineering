import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles.css';

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Pages are prerendered to static HTML at build time — attach to that markup instead of
// rebuilding it. In `npm run dev` the root is empty, so render normally.
const root = document.getElementById('root');
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
