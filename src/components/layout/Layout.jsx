// Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <div>
      <Header /> {/* Le Header est toujours en haut */}
      <Outlet /> {/* Outlet rend le contenu des routes */}
      <Footer /> {/* Le Footer est toujours en bas */}
    </div>
  );
};

export default Layout;
