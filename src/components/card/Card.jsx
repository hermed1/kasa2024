import React from 'react';
import './Card.css';

const Card = ({ image, title }) => {
  return (
    <div className='card'>
      <img src={image} alt={title} className='card__image' />
      <p className='card__title'>{title}</p>
    </div>
  );
};

export default Card;
