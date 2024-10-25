import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import ApartmentPage from '../../pages/apartmentPage/ApartmentPage';
import NotFound from '../../pages/notFound/NotFound';

// Configuration du router avec les différentes routes de l'application
const Router = createBrowserRouter([
  {
    // Route principale avec le composant Layout qui encapsule les autres pages
    path: '/',
    element: <Layout />,
    children: [
      {
        // Page d'accueil
        path: '/',
        element: <Home />,
      },
      {
        // Page "À propos"
        path: '/about',
        element: <About />,
      },
      {
        // Page d'un appartement spécifique, identifiée par un paramètre dynamique ":id"
        path: '/apartment/:id',
        element: <ApartmentPage />,
      },
      {
        // Page 404 pour les routes non définies
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default Router;
