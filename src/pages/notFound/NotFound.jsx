import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='notFound__container'>
      <p className='notFound__404'>404</p>
      <p className='notFound__message'>
        Oups! La page que
        <span className='mobile-line-break'>
          <br />
        </span>
        <span> </span>
        vous demandez n'existe pas.
      </p>
      <Link to='/' className='notFound__link'>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default NotFound;
