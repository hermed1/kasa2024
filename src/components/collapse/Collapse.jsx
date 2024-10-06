import React, { useState } from 'react';
import './Collapse.css';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCollapse = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='collapse'>
      <button className='collapse__button' onClick={handleCollapse}>
        <p className='collapse__title'>{title}</p>
        {isOpen ? (
          <i className='fa-solid fa-chevron-down fa-xl collapse__icon'></i>
        ) : (
          <i className='fa-solid fa-chevron-up fa-xl collapse__icon'></i>
        )}
      </button>
      {isOpen ? <p className='collapse__content'>{content}</p> : null}
    </div>
  );
};
export default Collapse;
