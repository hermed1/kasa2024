import React from 'react';
import './Header.css';
import Navbar from '../navbar/Navbar';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/' className='header__logo__container'>
        <img src={logo} alt='logo Kasa' className='header__logo' />
      </Link>{' '}
      <Navbar />
    </header>
  );
};

export default Header;
