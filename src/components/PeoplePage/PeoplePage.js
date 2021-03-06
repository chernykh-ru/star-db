import React, { useState, useContext } from 'react';
import ErrorBoundry from '../ErrorBoundry';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import Row from '../Row';
import './PeoplePage.css';
import { Record } from '../ItemDetails/ItemDetails';
import SwapiServiceContext from '../SwapiServiceContext/SwapiServiceContext';

const PeoplePage = () => {
  const [state, setState] = useState({
    selectedPerson: null,
  });

  const swapi = useContext(SwapiServiceContext);

  const { selectedPerson } = state;

  const onPersonSelected = (id) => {
    setState({ ...state, selectedPerson: id });
    // console.log('person id', id);
  };

  const peopleList = (
    <ItemList getData={swapi.getAllPeople} onItemSelected={onPersonSelected}>
      {({ name }) => <span>{name}</span>}
    </ItemList>
  );
  // const itemList = (
  //   <ItemList onItemSelected={onPersonSelected} getData={swapi.getAllPeople}>
  //     {/* renderItem={({ name, gender, birthYear }) => `${name} (${gender} ${birthYear})`}> */}
  //     {(i) => `${i.name} (${i.birthYear})`}
  //   </ItemList>
  // );

  const personDetails = (
    <ErrorBoundry>
      {selectedPerson && (
        <ItemDetails
          itemId={selectedPerson}
          getData={swapi.getPerson}
          getImageUrl={swapi.getPersonImage}>
          <Record field='gender' label='Gender' />
          <Record field='eyeColor' label='Eye Color' />
          <Record field='birthYear' label='Birth Year' />
        </ItemDetails>
      )}
    </ErrorBoundry>
  );

  return <Row left={peopleList} right={personDetails} />;
};

export default PeoplePage;
