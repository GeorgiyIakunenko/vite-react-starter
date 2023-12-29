import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { BaseLayout } from '@/pages/BaseLayout.tsx';
import { Welcome } from '@/pages/Welcome.tsx';

import './index.css';

console.log('VITE_TEST_VAR', import.meta.env.VITE_TEST_VAR); // env var

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { index: true, element: <Welcome /> },
      {
        path: 'about',
        element: (
          <main>
            <h1>About</h1>
          </main>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
