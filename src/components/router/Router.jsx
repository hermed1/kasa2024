import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import ApartmentPage from '../../pages/apartmentPage/ApartmentPage';
import NotFound from '../../pages/notFound/NotFound';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/apartment/:id',
        element: <ApartmentPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default Router;
