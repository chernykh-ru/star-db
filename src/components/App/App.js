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
import { Routes, Route, Outlet, Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
// import ItemList from '../ItemList';
// import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
// import Row from '../Row';
import StarshipDetails from '../StarshipPage/StarshipDetails';

function App() {
  const [state, setState] = useState({
    // showRandomPlanet: true,
    swapi: new SwapiService(),
  });

  let { id } = useParams();
  console.log('params', id);

  let location = useLocation();
  console.log('location', location);

  // let navigate = useNavigate();
  // console.log('navigate', navigate);

  // console.log('App state', state);

  const { swapi } = state;

  // const extractId = () => {
  //   const _idRegExp = /\/([0-9]*)$/;
  //   if (location) {
  //     return location.pathname.match(_idRegExp)[1];
  //   }
  // };
  // console.log(extractId());

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
          {/* <Route path='people' element={<PeoplePage />} />
          <Route path='planet' element={<PlanetPage />} /> */}
          <Route exact path='starship' element={<StarshipPage />} />
          <Route path='starship/:id' element={<StarshipDetails selectedStarship={10} />} />
          {/* <Route path='starship/:id' element={<h2>Hi ships</h2>} /> */}
        </Routes>
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
