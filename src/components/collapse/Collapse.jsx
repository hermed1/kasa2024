import React, { useState } from 'react';
import './Collapse.css';

const Collapse = ({ title, content, apartmentPage }) => {
  // State pour gérer l'ouverture et la fermeture du collapse
  const [isOpen, setIsOpen] = useState(false);

  // Fonction de gestion de clic pour inverser l'état ouvert/fermé
  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`collapse ${apartmentPage ? 'collapse-apartment-page' : ''}`}
    >
      {/* Bouton qui déclenche l'ouverture/fermeture */}
      <button className='collapse__button' onClick={handleCollapse}>
        {/* Titre du collapse, passé en prop */}
        <p className='collapse__title'>{title}</p>

        {/* Icône dynamique qui change selon l'état (ouvert/fermé) */}
        <i
          className={`fa-solid fa-chevron-up fa-lg collapse__icon ${
            isOpen ? 'collapse__icon--down' : 'collapse__icon--up'
          }`}
        ></i>
      </button>

      {/* Contenu du collapse, affiché ou masqué selon l'état */}
      <div
        className={`collapse__content ${
          isOpen ? 'collapse__content--open' : ''
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default Collapse;
