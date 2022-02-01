import React, { useState } from 'react';
import SwapiService from '../../services/SwapiService';
import ItemList from '../ItemList';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import './App.css';
import PeoplePage from '../PeoplePage/PeoplePage';
import ErrorBoundry from '../ErrorBoundry';
import Row from '../Row';

const swapi = new SwapiService();

function App() {
  const [state, setState] = useState({
    // selectedPerson: null,
    showRandomPlanet: true,
  });

  // console.log('App state', state);

  const { selectedPerson, showRandomPlanet } = state;

  const onToggleRandom = () => {
    setState(({ showRandomPlanet }) => {
      return { ...state, showRandomPlanet: !showRandomPlanet };
    });
    // console.log('toggleRandom', toggleRandom);
  };

  const personDetails = (
    <ItemDetails itemId={3} getData={swapi.getPerson} getImageUrl={swapi.getPersonImage}>
      <Record field='gender' label='Gender' />
      <Record field='eyeColor' label='Eye Color' />
    </ItemDetails>
  );

  const starshipDetails = (
    <ItemDetails itemId={10} getData={swapi.getStarship} getImageUrl={swapi.getStarshipImage}>
      <Record field='model' label='Model' />
      <Record field='length' label='Length' />
    </ItemDetails>
  );

  return (
    <div className='container'>
      <Header />
      {/* {showRandomPlanet && <RandomPlanet />}
      <ToggleRandomPlanet onToggleRandom={onToggleRandom} />
      <ErrorBoundry>
        <PeoplePage />
      </ErrorBoundry> */}
      <Row left={personDetails} right={starshipDetails} />
    </div>
  );
}

const ToggleRandomPlanet = ({ onToggleRandom }) => {
  return (
    <div>
      <button className='toggle-planet btn btn-warning btn-lg' onClick={onToggleRandom}>
        Toggle Random Planet
      </button>
    </div>
  );
};

export default App;
