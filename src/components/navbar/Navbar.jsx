import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='nav'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        Accueil
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'active-link' : '')}
      >
        A Propos
      </NavLink>
    </nav>
  );
};

export default Navbar;
