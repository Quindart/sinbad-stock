/* eslint-disable react-refresh/only-export-components */
import '@/i18n';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import type router from './route';
import App from './App';
import { ThemeProvider } from './components/common/theme-provider';
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('app')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  );
}
