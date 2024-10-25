import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ pictures }) => {
  const numberOfPics = pictures?.length ?? 0; // Nombre total d'images dans le carousel
  const [currentIndex, setCurrentIndex] = useState(0); // Index de l'image actuelle
  const currentImage = pictures[currentIndex]; // Image à afficher selon l'index
  const isDesktop = window.innerWidth >= 992; // Détermine si on est en affichage desktop pour la taille des flèches

  // Affiche l'image précédente (ou la dernière si on est au début)
  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? numberOfPics - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Affiche l'image suivante (ou la première si on est à la fin)
  const handleNext = () => {
    const newIndex = currentIndex === numberOfPics - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='carousel'>
      {/* Flèche gauche pour naviguer vers l'image précédente, si plus d'une image */}
      {numberOfPics > 1 && (
        <i
          className={`fa-solid fa-chevron-left carousel__arrow--left ${
            isDesktop ? 'fa-5x' : 'fa-1x'
          }`}
          onClick={handlePrev}
        />
      )}

      {/* Flèche droite pour naviguer vers l'image suivante, si plus d'une image */}
      {numberOfPics > 1 && (
        <i
          className={`fa-solid fa-chevron-right carousel__arrow--right ${
            isDesktop ? 'fa-5x' : 'fa-1x'
          }`}
          onClick={handleNext}
        />
      )}

      {/* Affiche l'image actuelle du carousel */}
      <img src={currentImage} alt='appartement' className='carousel__image' />

      {/* Compteur de l'image actuelle, si plus d'une image */}
      {numberOfPics > 1 && (
        <p className='carousel__count'>
          {currentIndex + 1} / {numberOfPics}
        </p>
      )}
    </div>
  );
};

export default Carousel;
