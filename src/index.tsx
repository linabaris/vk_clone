import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { routes, privateRoutes } from './components/routes/routes';
import './index.css'

const user = false;
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {user? (
      <RouterProvider router={privateRoutes}/>
    ) : (
      <RouterProvider router={routes} />
    )}
  </React.StrictMode>
);

