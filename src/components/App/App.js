import React, { useState } from 'react';
import SwapiService from '../../services/SwapiService';
import ItemList from '../ItemList';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemDetails from '../ItemDetails';
import './App.css';
import PeoplePage from '../PeoplePage/PeoplePage';
import ErrorBoundry from '../ErrorBoundry';

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

  // const onPersonSelected = (id) => {
  //   setState({ ...state, selectedPerson: id });
  //   // console.log('person id', id);
  // };

  return (
    <div className='container'>
      <Header />
      {showRandomPlanet && <RandomPlanet />}
      <ToggleRandomPlanet onToggleRandom={onToggleRandom} />
      <ErrorBoundry>
        <PeoplePage />
      </ErrorBoundry>

      {/* <div className='row mb2 page'>
        <div className='col md-6'>
          <ItemList
            getData={swapi.getAllStarships}
            renderItem={({ name, model, crew }) => `${name} (${model} ${crew})`}
          />
        </div>
        <div className='col md-6'>
          {selectedPerson && <PersonDetails personId={selectedPerson} />}
        </div>
      </div> */}

      {/* <div className='row mb2 page'>
        <div className='col md-6'>
          <ItemList
            getData={swapi.getAllPlanets}
            renderItem={({ name, population, diameter }) => (
              <span>
                {name} {population} {diameter}
                <button className='btn btn-outline-secondary'>!</button>
              </span>
            )}
          />
        </div>
        <div className='col md-6'>
          {selectedPerson && <PersonDetails personId={selectedPerson} />}
        </div>
      </div> */}
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
