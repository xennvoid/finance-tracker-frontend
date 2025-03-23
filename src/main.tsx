import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CurrentUserProvider } from '@contexts/current-user-context.tsx';

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CurrentUserProvider>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </CurrentUserProvider>
  </StrictMode>,
);
