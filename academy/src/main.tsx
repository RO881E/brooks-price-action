import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AppCrashScreen, ErrorBoundary } from './components/ErrorBoundary';
import { startPwa } from './features/pwa';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={(props) => <AppCrashScreen {...props} />}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);

startPwa();
