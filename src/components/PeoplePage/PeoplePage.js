import React, { useState, useContext } from 'react';
// import SwapiService from '../../services/SwapiService';
import ErrorBoundry from '../ErrorBoundry';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import Row from '../Row';
import './PeoplePage.css';
import { Record } from '../ItemDetails/ItemDetails';
// import { SwapiServiceConsumer } from '../SwapiServiceContext';
import SwapiServiceContext from '../SwapiServiceContext/SwapiServiceContext';

// const swapi = new SwapiService();

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

  const itemList = (
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
      {/* {selectedPerson && <ItemDetails itemId={selectedPerson} getData={swapi.getStarship} />} */}
    </ErrorBoundry>
  );

  return <Row left={itemList} right={personDetails} />;
};

export default PeoplePage;
