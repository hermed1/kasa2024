import React, { useEffect, useState } from 'react';
import './CardsContainer.css';
import datas from '../../assets/housingOffers.json';
import Card from '../card/Card';
import { Link } from 'react-router-dom';

const CardsContainer = () => {
  // Initialisation du state pour stocker les données des appartements
  const [apartments, setApartments] = useState([]);

  // Fonction de récupération des données (ici on simule un fetch local)
  const getDatas = () => {
    // Simulation d'une récupération de données (sans async ici car JSON local)
    fetch(datas)
      .then(setApartments(datas)) // Attribution directe des données
      .catch((error) => console.error(error)); // Gestion d'erreur basique
  };

  // Utilisation du useEffect pour lancer la récupération de données une seule fois (comportement de componentDidMount)
  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div className='cards__container'>
      {apartments.map((apartment) => (
        // Utilisation de la key uniquement sur le conteneur principal, ici <Link>
        <Link
          to={`/apartment/${apartment.id}`}
          className='card__link'
          key={apartment.id}
        >
          {/* Composant Card qui reçoit les données de l'appartement en props */}
          <Card title={apartment.title} image={apartment.cover} />
        </Link>
      ))}
    </div>
  );
};

export default CardsContainer;
