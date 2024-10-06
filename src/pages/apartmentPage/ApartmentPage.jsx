import React, { useEffect, useState } from 'react';
import './ApartmentPage.css';
import { useParams } from 'react-router-dom';
import apartmentsList from '../../assets/housingOffers.json';

const ApartmentPage = () => {
  const { id } = useParams();
  const [apartment, setApartment] = useState({});
  useEffect(() => {
    const selectedApartment = apartmentsList.find(
      (apartment) => apartment.id === id
    );
    setApartment(selectedApartment);
  }, [id]);

  return (
    <div>
      <p>apartment</p>
    </div>
  );
};

export default ApartmentPage;
