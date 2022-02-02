import React, { useState, useContext } from 'react';
import ErrorBoundry from '../ErrorBoundry';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import Row from '../Row';
import { Record } from '../ItemDetails/ItemDetails';
import SwapiServiceContext from '../SwapiServiceContext/SwapiServiceContext';
import './StarshipPage.css';

const StarshipPage = () => {
  const [state, setState] = useState({
    selectedStarship: null,
  });

  const swapi = useContext(SwapiServiceContext);

  const { selectedStarship } = state;

  const onStarshipSelected = (id) => {
    setState({ ...state, selectedStarship: id });
    // console.log('person id', id);
  };

  const starshipList = (
    <ItemList getData={swapi.getAllStarships} onItemSelected={onStarshipSelected}>
      {({ name }) => <span>{name}</span>}
    </ItemList>
  );
  // const itemList = (
  //   <ItemList onItemSelected={onPersonSelected} getData={swapi.getAllPeople}>
  //     {/* renderItem={({ name, gender, birthYear }) => `${name} (${gender} ${birthYear})`}> */}
  //     {(i) => `${i.name} (${i.birthYear})`}
  //   </ItemList>
  // );

  const starshipDetails = (
    <ErrorBoundry>
      {selectedStarship && (
        <ItemDetails
          itemId={selectedStarship}
          getData={swapi.getStarship}
          getImageUrl={swapi.getStarshipImage}>
          <Record field='model' label='Model' />
          <Record field='length' label='Length' />
          <Record field='costInCredits' label='Cost' />
        </ItemDetails>
      )}
    </ErrorBoundry>
  );

  return <Row left={starshipList} right={starshipDetails} />;
};

export default StarshipPage;
