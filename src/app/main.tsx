import '../shared/styles/reset.css';
import '../shared/styles/theme.css';
import '../shared/styles/global.css';

import { queryClient } from '@shared/apis/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './routers/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />{' '}
    </QueryClientProvider>
  </StrictMode>,
);
