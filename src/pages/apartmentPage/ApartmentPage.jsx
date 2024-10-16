import React, { useEffect, useState } from 'react';
import './ApartmentPage.css';
import { Navigate, useParams } from 'react-router-dom';
import datas from '../../assets/housingOffers.json';
import Carousel from '../../components/carousel/Carousel';
import Collapse from '../../components/collapse/Collapse';

const ApartmentPage = () => {
  const { id } = useParams();
  const [apartmentsList, setApartmentsList] = useState([]);
  const [apartment, setApartment] = useState({});
  const getDatas = () => {
    fetch(datas)
      .then(setApartmentsList(datas))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getDatas();
  }, []);

  useEffect(() => {
    if (apartmentsList.length > 0) {
      const selectedApartment = apartmentsList.find(
        (apartment) => apartment.id === id
      );
      setApartment(selectedApartment);
    }
  }, [id, apartmentsList]);

  const rating = parseInt(apartment?.rating ?? 0);
  const redStars = new Array(rating).fill(null);
  const greyStars = new Array(5 - rating).fill(null);

  if (!apartment) {
    return <Navigate to='/404' />;
  }
  if (!apartment.id) {
    return null;
  }

  const pictures = apartment?.pictures ?? [];
  const firstName = apartment?.host?.name?.split(' ')[0] ?? '';
  const lastName = apartment?.host?.name?.split(' ')[1] ?? '';

  const equipmentsList = apartment?.equipments ? (
    <ul>
      {apartment.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))}
    </ul>
  ) : (
    'Aucun équipement disponible'
  );

  return (
    <div className='apartment'>
      <div className='carousel__container'>
        {<Carousel pictures={pictures} />}
      </div>
      <div className='infos-container'>
        <div className='apartment__title-location-tags'>
          <h1 className='apartment__title'>
            {apartment?.title ?? 'titre inconnu'}
          </h1>
          <div className='apartment__location'>
            {apartment?.location ?? 'Localisation inconnue'}
          </div>
          <div className='apartment__tags'>
            {apartment?.tags?.map((tag) => (
              <div key={tag} className='apartment__tag'>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className='rating-and-host'>
          <div className='rating'>
            {redStars.map((_, index) => {
              return (
                <i
                  key={`red-${index}`}
                  className='fa-solid fa-star fa-sm rating__star--red'
                ></i>
              );
            })}
            {greyStars.map((_, index) => {
              return (
                <i
                  key={`grey-${index}`}
                  className='fa-solid fa-star fa-sm rating__star--grey'
                ></i>
              );
            })}
          </div>
          <div className='host'>
            <div className='host__name'>
              <p className='host__first-name'>{firstName}</p>
              <p className='host__last-name'>{lastName}</p>
            </div>
            <img
              src={apartment?.host?.picture}
              alt='hôte'
              className='host__pic'
            />
          </div>
        </div>
      </div>
      <Collapse title='Description' content={apartment?.description} />
      <Collapse title='Équipements' content={equipmentsList} />
    </div>
  );
};

export default ApartmentPage;

// || valeur de droite par défaut si gauche falsy
// ?? valeur de droite par défaut si gauche undefined ou null
// ?. si l'objet de gauche est undefined ou null, on ne va pas essayer d'accéder à la propriété de droite
// && si la condition est vraie, on retourne la valeur de droite
