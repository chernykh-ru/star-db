import React, { useState } from 'react';
import SwapiService from '../../services/SwapiService';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
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
    <ItemList
      onItemSelected={onPersonSelected}
      getData={swapi.getAllPeople}
      renderItem={({ name, gender, birthYear }) => `${name} (${gender} ${birthYear})`}
    />
  );

  const personDetails = selectedPerson && <PersonDetails personId={selectedPerson} />;

  return <Row left={itemList} right={personDetails} />;
};

export default PeoplePage;
