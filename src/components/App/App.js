import React, { useState } from 'react';
import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/DummySwapiService';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage/PeoplePage';
import ErrorBoundry from '../ErrorBoundry';
import SwapiServiceContext from '../SwapiServiceContext/SwapiServiceContext';
import PlanetPage from '../PlanetPage';
import StarshipPage from '../StarshipPage/StarshipPage';
import { Routes, Route, Outlet, Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
// import ItemList from '../ItemList';
// import ItemDetails, { Record } from '../ItemDetails/ItemDetails';
// import Row from '../Row';
import StarshipDetails from '../StarshipPage/StarshipDetails';

function App() {
  const [state, setState] = useState({
    swapi: new SwapiService(),
  });

  // let { id } = useParams();
  // console.log('params from App', id);
  // let params = useParams();
  // console.log('params from App', params);

  let location = useLocation();
  console.log('location', location);

  // let navigate = useNavigate();
  // console.log('navigate', navigate);

  // console.log('App state', state);

  const { swapi } = state;

  const extractId = () => {
    const _idRegExp = /\/([0-9]*)$/;
    if (location.pathname.match(_idRegExp)) {
      return location.pathname.match(_idRegExp)[1];
    }
  };
  const starshipId = extractId();
  // console.log(extractId());
  // console.log(starshipId);

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
      <SwapiServiceContext.Provider value={swapi}>
        <Routes>
          {/* <Route exact path='/' element={<h2>Welcome to Star DB</h2>} /> */}
          {/* <Route path='people' element={<PeoplePage />} />
          <Route path='planet' element={<PlanetPage />} /> */}
          <Route path='starships/*' element={<StarshipPage />} />
          <Route path='starships/:id' element={<StarshipDetails selectedStarship={starshipId} />} />

          {/* <Route path='starship/*' element={<StarshipPage />}>
            <Route path=':id' element={<StarshipDetails selectedStarship={starshipId} />} />
          </Route> */}
        </Routes>
      </SwapiServiceContext.Provider>
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
