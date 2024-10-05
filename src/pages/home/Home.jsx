import React from 'react';
import './Home.css';
import Banner from '../../components/banner/Banner';
import CardsContainer from '../../components/cardsContainer/CardsContainer';

const Home = () => {
  return (
    <div className='homepage__container'>
      <Banner />
      <CardsContainer />
    </div>
  );
};

export default Home;
