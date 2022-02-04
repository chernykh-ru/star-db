import React, { useState } from 'react';
import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/DummySwapiService';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage/PeoplePage';
import ErrorBoundry from '../ErrorBoundry';
import SwapiServiceContext from '../SwapiServiceContext/SwapiServiceContext';
import PlanetPage from '../PlanetPage';
import StarshipPage from '../StarshipPage';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import './App.css';
// import ItemList from '../ItemList';
// import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
// import Row from '../Row';

function App() {
  const [state, setState] = useState({
    // showRandomPlanet: true,
    swapi: new SwapiService(),
  });

  // console.log('App state', state);

  const { swapi } = state;

  // const onToggleRandom = () => {
  //   setState(({ showRandomPlanet }) => {
  //     return { ...state, showRandomPlanet: !showRandomPlanet };
  //   });
  // };

  const onChangeService = () => {
    setState(({ swapi }) => {
      const Service = swapi instanceof SwapiService ? DummySwapiService : SwapiService;
      return { ...state, swapi: new Service() };
    });
  };

  return (
    <div className='container'>
      <Header onChangeService={onChangeService} />
      <RandomPlanet />
      {/* {showRandomPlanet && <RandomPlanet />} */}
      {/* <ToggleRandomPlanet onToggleRandom={onToggleRandom} /> */}
      <SwapiServiceContext.Provider value={swapi}>
        <Routes>
          <Route exact path='/' element={<h2>Welcome to Star DB</h2>} />
          <Route path='people' element={<PeoplePage />} />
          <Route path='planet' element={<PlanetPage />} />
          <Route path='starship' element={<StarshipPage />} />
        </Routes>
        {/* <Link to='/people'>
          <ErrorBoundry>
            <PeoplePage />
          </ErrorBoundry>
        </Link>
        <Link to='/planet'>
          <ErrorBoundry>
            <PlanetPage />
          </ErrorBoundry> 
        </Link>
        <Link to='/starship'>
          <ErrorBoundry>
            <StarshipPage />
          </ErrorBoundry>
        </Link> */}
      </SwapiServiceContext.Provider>
      <Outlet />
    </div>
  );
}

// const ToggleRandomPlanet = ({ onToggleRandom }) => {
//   return (
//     <div>
//       <button className='toggle-planet btn btn-warning btn-lg' onClick={onToggleRandom}>
//         Toggle Random Planet
//       </button>
//     </div>
//   );
// };

export default App;
