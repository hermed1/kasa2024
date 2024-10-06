// import React, { useState } from 'react';
// import './Collapse.css';

// const Collapse = ({ title, content }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const handleCollapse = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className='collapse'>
//       <button className='collapse__button' onClick={handleCollapse}>
//         <p className='collapse__title'>{title}</p>
//         <i
//           className={`fa-solid fa-chevron-up fa-xl collapse__icon ${
//             isOpen ? 'collapse__icon--down' : 'collapse__icon--up'
//           }`}
//         ></i>
//       </button>
//       {isOpen && <p className='collapse__content'>{content}</p>}
//     </div>
//   );
// };

// export default Collapse;
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
        <i
          className={`fa-solid fa-chevron-up fa-lg collapse__icon ${
            isOpen ? 'collapse__icon--down' : 'collapse__icon--up'
          }`}
        ></i>
      </button>
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
