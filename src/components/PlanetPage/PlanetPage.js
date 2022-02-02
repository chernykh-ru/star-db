import React, { useState, useContext } from 'react';
import ErrorBoundry from '../ErrorBoundry';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import Row from '../Row';
import { Record } from '../ItemDetails/ItemDetails';
import SwapiServiceContext from '../SwapiServiceContext/SwapiServiceContext';
import './PlanetPage.css';

const PlanetPage = () => {
  const [state, setState] = useState({
    selectedPlanet: null,
  });

  const swapi = useContext(SwapiServiceContext);

  const { selectedPlanet } = state;

  const onPlanetSelected = (id) => {
    setState({ ...state, selectedPlanet: id });
    // console.log('person id', id);
  };

  const planetList = (
    <ItemList getData={swapi.getAllPlanets} onItemSelected={onPlanetSelected}>
      {({ name }) => <span>{name}</span>}
    </ItemList>
  );
  // const itemList = (
  //   <ItemList onItemSelected={onPersonSelected} getData={swapi.getAllPeople}>
  //     {/* renderItem={({ name, gender, birthYear }) => `${name} (${gender} ${birthYear})`}> */}
  //     {(i) => `${i.name} (${i.birthYear})`}
  //   </ItemList>
  // );

  const planetDetails = (
    <ErrorBoundry>
      {selectedPlanet && (
        <ItemDetails
          itemId={selectedPlanet}
          getData={swapi.getPlanet}
          getImageUrl={swapi.getPlanetImage}>
          <Record field='population' label='Population' />
          <Record field='rotationPeriod' label='Rotation Period' />
          <Record field='diameter' label='Diameter' />
        </ItemDetails>
      )}
    </ErrorBoundry>
  );

  return <Row left={planetList} right={planetDetails} />;
};

export default PlanetPage;
