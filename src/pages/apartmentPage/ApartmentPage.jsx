import React, { useEffect, useState } from 'react';
import './ApartmentPage.css';
import { Navigate, useParams } from 'react-router-dom';
import datas from '../../assets/housingOffers.json';
import Carousel from '../../components/carousel/Carousel';
import Collapse from '../../components/collapse/Collapse';

const ApartmentPage = () => {
  const { id } = useParams(); // Récupération de l'ID depuis l'URL
  const [apartmentsList, setApartmentsList] = useState([]); // Stockage de la liste d'appartements
  const [apartment, setApartment] = useState({}); // Objet appartement initialisé vide pour éviter les erreurs de rendu conditionnel

  const getDatas = () => {
    fetch(datas)
      .then(setApartmentsList(datas)) // Mise à jour de la liste d'appartements
      .catch((error) => console.error(error)); // Affichage d'erreur en cas d'échec
  };

  useEffect(() => {
    getDatas(); // Appel à la fonction de récupération des données au montage du composant
  }, []);

  // Filtrage pour sélectionner l'appartement correspondant à l'ID récupéré
  useEffect(() => {
    if (apartmentsList.length > 0) {
      const selectedApartment = apartmentsList.find(
        (apartment) => apartment.id === id
      );
      setApartment(selectedApartment);
    }
  }, [id, apartmentsList]);

  const rating = parseInt(apartment?.rating ?? 0); // Conversion de la note en nombre pour générer les étoiles
  const redStars = new Array(rating).fill(null); // Tableaux d'étoiles rouges (correspondant à la note de l'appartement)
  const greyStars = new Array(5 - rating).fill(null); // Tableaux d'étoiles grises pour compléter jusqu'à 5 étoiles

  // Redirection vers la page 404 si aucun appartement n'est trouvé (i.e., null ou undefined)
  if (!apartment) {
    return <Navigate to='/404' />;
  }

  // Empêche le rendu jusqu'à ce que l'objet "apartment" soit peuplé avec les données
  if (!apartment.id) {
    return null;
  }

  const pictures = apartment?.pictures ?? []; // Tableau d'images, avec tableau vide par défaut
  const firstName = apartment?.host?.name?.split(' ')[0] ?? ''; // Extraction du prénom de l'hôte
  const lastName = apartment?.host?.name?.split(' ')[1] ?? ''; // Extraction du nom de famille

  // Génération de la liste d'équipements sous forme de <ul>
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
        <Carousel pictures={pictures} />{' '}
        {/* Affiche un carrousel d'images (ou galerie) si plusieurs photos */}
      </div>
      <div className='infos-container'>
        <div className='apartment__title-location-tags'>
          <h1 className='apartment__title'>
            {apartment?.title ?? 'titre inconnu'}{' '}
            {/* Titre de l'appartement ou message par défaut */}
          </h1>
          <div className='apartment__location'>
            {apartment?.location ?? 'Localisation inconnue'}{' '}
            {/* Emplacement de l'appartement */}
          </div>
          <div className='apartment__tags'>
            {apartment?.tags?.map((tag, index) => (
              <div key={index} className='apartment__tag'>
                {tag}{' '}
                {/* Tag associé à l'appartement, avec une clé unique `index` */}
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
                ></i> // Icône étoile rouge pour représenter la note
              );
            })}
            {greyStars.map((_, index) => {
              return (
                <i
                  key={`grey-${index}`}
                  className='fa-solid fa-star fa-sm rating__star--grey'
                ></i> // Icône étoile grise pour compléter jusqu'à 5 étoiles
              );
            })}
          </div>
          <div className='host'>
            <div className='host__name'>
              <p className='host__first-name'>{firstName}</p>{' '}
              {/* Prénom de l'hôte */}
              <p className='host__last-name'>{lastName}</p>{' '}
              {/* Nom de l'hôte */}
            </div>
            <img
              src={apartment?.host?.picture}
              alt='hôte'
              className='host__pic' // Image de l'hôte
            />
          </div>
        </div>
      </div>
      <div className='apartment__collapses'>
        <Collapse
          title='Description'
          content={apartment?.description}
          apartmentPage={true}
        />{' '}
        {/* Section avec la description de l'appartement */}
        <Collapse
          title='Équipements'
          content={equipmentsList}
          apartmentPage={true}
        />{' '}
        {/* Section avec les équipements sous forme de liste */}
      </div>
    </div>
  );
};

export default ApartmentPage;

// || : Valeur de droite par défaut si la gauche est "falsy" (vide, zéro, etc.)
// ?? : Valeur de droite par défaut si la gauche est strictement undefined ou null
// ?. : Permet d'accéder à la propriété de droite uniquement si l'objet de gauche n'est pas undefined ou null
// && : Si la condition est vraie, retourne la valeur de droite
