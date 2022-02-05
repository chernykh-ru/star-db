import React, { useContext } from 'react';
import ErrorBoundry from '../ErrorBoundry';
import ItemDetails from '../ItemDetails';
import { Record } from '../ItemDetails/ItemDetails';
import SwapiServiceContext from '../SwapiServiceContext/SwapiServiceContext';
// import { useLocation, useParams } from 'react-router-dom';

import './StarshipPage.css';

const StarshipDetails = ({ selectedStarship }) => {
  const swapi = useContext(SwapiServiceContext);

  // let location = useLocation();
  // console.log('location', location);

  // let params = useParams();
  // console.log(params);

  const { getStarship, getStarshipImage } = swapi;
  return (
    <ErrorBoundry>
      {selectedStarship && (
        <ItemDetails itemId={selectedStarship} getData={getStarship} getImageUrl={getStarshipImage}>
          <Record field='model' label='Model' />
          <Record field='length' label='Length' />
          <Record field='costInCredits' label='Cost' />
        </ItemDetails>
      )}
    </ErrorBoundry>
  );
};

export default StarshipDetails;
