import React, { useState, useContext } from 'react';
import ErrorBoundry from '../ErrorBoundry';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import Row from '../Row';
import './PeoplePage.css';
import { Record } from '../ItemDetails/ItemDetails';
import SwapiServiceContext from '../SwapiServiceContext/SwapiServiceContext';

const PersonDetails = ({ selectedPerson, getPerson, getPersonImage }) => {
  return (
    <ErrorBoundry>
      {selectedPerson && (
        <ItemDetails itemId={selectedPerson} getData={getPerson} getImageUrl={getPersonImage}>
          <Record field='gender' label='Gender' />
          <Record field='eyeColor' label='Eye Color' />
          <Record field='birthYear' label='Birth Year' />
        </ItemDetails>
      )}
    </ErrorBoundry>
  );
};

export default PersonDetails;
