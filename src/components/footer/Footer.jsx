import React from 'react';
import footerLogo from '../../assets/logo_footer.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <img src={footerLogo} alt='logo Kasa footer' className='footer__logo' />
      <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
