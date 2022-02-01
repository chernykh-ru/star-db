import React, { useState } from 'react';
import SwapiService from '../../services/SwapiService';
import ErrorBoundry from '../ErrorBoundry';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import Row from '../Row';
import './PeoplePage.css';

const swapi = new SwapiService();

const PeoplePage = () => {
  const [state, setState] = useState({
    selectedPerson: null,
  });

  const { selectedPerson } = state;

  const onPersonSelected = (id) => {
    setState({ ...state, selectedPerson: id });
    // console.log('person id', id);
  };

  const itemList = (
    <ItemList onItemSelected={onPersonSelected} getData={swapi.getAllPeople}>
      {/* renderItem={({ name, gender, birthYear }) => `${name} (${gender} ${birthYear})`}> */}
      {(i) => `${i.name} (${i.birthYear})`}
    </ItemList>
  );

  const personDetails = (
    <ErrorBoundry>
      {selectedPerson && <ItemDetails itemId={selectedPerson} getData={swapi.getStarship} />}
    </ErrorBoundry>
  );

  return <Row left={itemList} right={personDetails} />;
};

export default PeoplePage;
