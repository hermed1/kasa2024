import React, { useEffect, useState } from 'react';
import './CardsContainer.css';
import datas from '../../assets/housingOffers.json';
import Card from '../card/Card';

const CardsContainer = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    setApartments(datas);
  }, []);

  return (
    <div className='cards__container'>
      {apartments.map((apartment) => (
        <Card
          key={apartment.id}
          title={apartment.title}
          image={apartment.cover}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
