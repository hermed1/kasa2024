import React from 'react';
import './Banner.css';
import bannerImage from '../../assets/banner_home.png';

const Banner = () => {
  return (
    <div className='banner'>
      <img src={bannerImage} alt='Banner' className='banner__img' />
      <p className='banner__text'>Chez vous, partout et ailleurs</p>
    </div>
  );
};

export default Banner;
