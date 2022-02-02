import React, { useState } from 'react';
import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/DummySwapiService';
import ItemList from '../ItemList';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
import './App.css';
import PeoplePage from '../PeoplePage/PeoplePage';
import ErrorBoundry from '../ErrorBoundry';
import Row from '../Row';
import SwapiServiceContext from '../SwapiServiceContext/SwapiServiceContext';
// import { SwapiServiceProvider } from '../SwapiServiceContext';
// const swapi = new SwapiService();
// const swapi = new DummySwapiService();

function App() {
  const [state, setState] = useState({
    showRandomPlanet: true,
    swapi: new SwapiService(),
  });

  // console.log('App state', state);

  const { swapi, showRandomPlanet } = state;

  // const {
  //   getPerson,
  //   getStarship,
  //   getPlanet,
  //   getAllPeople,
  //   getAllPlanets,
  //   getAllStarships,
  //   getPersonImage,
  //   getStarshipImage,
  //   getPlanetImage,
  // } = swapi;

  const onToggleRandom = () => {
    setState(({ showRandomPlanet }) => {
      return { ...state, showRandomPlanet: !showRandomPlanet };
    });
    // console.log('toggleRandom', toggleRandom);
  };

  const onChangeService = () => {
    setState(({ swapi }) => {
      const Service = swapi instanceof SwapiService ? DummySwapiService : SwapiService;
      return { ...state, swapi: new Service() };
    });
  };

  // const peopleList = (
  //   <ItemList getData={getAllPeople} onItemSelected={() => {}}>
  //     {({ name }) => <span>{name}</span>}
  //   </ItemList>
  // );

  // const planetList = (
  //   <ItemList getData={getAllPlanets} onItemSelected={() => {}}>
  //     {({ name }) => <span>{name}</span>}
  //   </ItemList>
  // );

  // const starshipList = (
  //   <ItemList getData={getAllStarships} onItemSelected={() => {}}>
  //     {({ name, model }) => (
  //       <span>
  //         {name}({model})
  //       </span>
  //     )}
  //   </ItemList>
  // );

  // const personDetails = (
  //   <ItemDetails itemId={3} getData={getPerson} getImageUrl={getPersonImage}>
  //     <Record field='gender' label='Gender' />
  //     <Record field='eyeColor' label='Eye Color' />
  //     <Record field='birthYear' label='Birth Year' />
  //   </ItemDetails>
  // );

  // const planetDetails = (
  //   <ItemDetails itemId={10} getData={getPlanet} getImageUrl={getPlanetImage}>
  //     <Record field='population' label='Population' />
  //     <Record field='rotationPeriod' label='Rotation Period' />
  //     <Record field='diameter' label='Diameter' />
  //   </ItemDetails>
  // );

  // const starshipDetails = (
  //   <ItemDetails itemId={10} getData={getStarship} getImageUrl={getStarshipImage}>
  //     <Record field='model' label='Model' />
  //     <Record field='length' label='Length' />
  //     <Record field='costInCredits' label='Cost' />
  //   </ItemDetails>
  // );

  return (
    <div className='container'>
      <Header onChangeService={onChangeService} />
      {showRandomPlanet && <RandomPlanet />}
      <ToggleRandomPlanet onToggleRandom={onToggleRandom} />
      <SwapiServiceContext.Provider value={swapi}>
        <ErrorBoundry>
          <PeoplePage />
        </ErrorBoundry>
      </SwapiServiceContext.Provider>
      {/* <Row left={peopleList} right={personDetails} />
      <Row left={planetList} right={planetDetails} />
      <Row left={starshipList} right={starshipDetails} /> */}

      {/* <SwapiServiceProvider value={swapi}>
        <Row left={peopleList} right={personDetails} />
        <Row left={planetList} right={planetDetails} />
        <Row left={starshipList} right={starshipDetails} />
      </SwapiServiceProvider> */}
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
