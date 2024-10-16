import React, { useEffect, useState } from 'react';
import './CardsContainer.css';
import datas from '../../assets/housingOffers.json';
import Card from '../card/Card';
import { Link } from 'react-router-dom';

const CardsContainer = () => {
  const [apartments, setApartments] = useState([]);
  const getDatas =  () => {
    fetch(datas)
      .then(setApartments(datas))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div className='cards__container'>
      {apartments.map((apartment) => (
        <Link
          to={`/apartment/${apartment.id}`}
          className='card__link'
          key={apartment.id}
        >
          <Card
            key={apartment.id}
            title={apartment.title}
            image={apartment.cover}
          />
        </Link>
      ))}
    </div>
  );
};

export default CardsContainer;
