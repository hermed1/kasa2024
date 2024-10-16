import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ pictures }) => {
  const numberOfPics = pictures?.length ?? 0;
  //   const [currentImage, setCurrentImage] = useState(pictures[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = pictures[currentIndex];
  const isDesktop = window.innerWidth >= 992;
  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? numberOfPics - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    // setCurrentImage(pictures[currentIndex]);
    console.log(currentIndex);
  };
  const handleNext = () => {
    const newIndex = currentIndex === numberOfPics - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    // setCurrentImage(pictures[currentIndex]);
    console.log(currentIndex);
  };
  return (
    <div className='carousel'>
      {numberOfPics > 1 && (
        <i
          //   className='fa-solid fa-chevron-left fa-2xl carousel__arrow--left'
          className={`fa-solid fa-chevron-left carousel__arrow--left ${
            isDesktop ? 'fa-5x' : 'fa-1x'
          }`}
          onClick={handlePrev}
        />
      )}
      {numberOfPics > 1 && (
        <i
          className={`fa-solid fa-chevron-right carousel__arrow--right ${
            isDesktop ? 'fa-5x' : 'fa-1x'
          }`}
          onClick={handleNext}
        />
      )}
      <img src={currentImage} alt=' appartement' className='carousel__image' />
      {numberOfPics > 1 && (
        <p className='carousel__count'>
          {currentIndex + 1} / {numberOfPics}
        </p>
      )}
    </div>
  );
};

export default Carousel;
