import React, { useState } from 'react';
import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/DummySwapiService';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage/PeoplePage';
import ErrorBoundry from '../ErrorBoundry';
import SwapiServiceContext from '../SwapiServiceContext/SwapiServiceContext';
import PlanetPage from '../PlanetPage/PlanetPage';
import StarshipPage from '../StarshipPage/StarshipPage';
import { Routes, Route, Outlet, Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import StarshipDetails from '../StarshipPage/StarshipDetails';
import LoginPage from '../Pages/LoginPage';
import SecretPage from '../Pages/SecretPage';
function App() {
  const [state, setState] = useState({
    swapi: new SwapiService(),
    isloggedIn: false,
  });

  // let { id } = useParams();
  // console.log('params from App', id);
  // let params = useParams();
  // console.log('params from App', params);
  // let navigate = useNavigate();
  // console.log('navigate', navigate);

  let location = useLocation();
  console.log('location', location);

  const { swapi, isloggedIn } = state;

  const extractId = () => {
    const _idRegExp = /\/([0-9]*)$/;
    if (location.pathname.match(_idRegExp)) {
      return location.pathname.match(_idRegExp)[1];
    }
  };
  const selectedId = extractId();

  const onChangeService = () => {
    setState(({ swapi }) => {
      const Service = swapi instanceof SwapiService ? DummySwapiService : SwapiService;
      return { ...state, swapi: new Service() };
    });
  };

  const onLogin = () => {
    setState(({ isloggedIn }) => {
      return { ...state, isloggedIn: !isloggedIn };
    });
  };

  return (
    <div className='container'>
      <Header onChangeService={onChangeService} />
      <RandomPlanet />
      <SwapiServiceContext.Provider value={swapi}>
        <Routes>
          <Route path='people/*' element={<PeoplePage selectedPerson={selectedId} />} />

          <Route path='planets/*' element={<PlanetPage selectedPlanet={selectedId} />} />

          <Route path='starships/*' element={<StarshipPage />} />
          <Route path='starships/:id' element={<StarshipDetails selectedStarship={selectedId} />} />

          <Route path='login' element={<LoginPage isloggedIn={isloggedIn} onLogin={onLogin} />} />
          <Route path='secret' element={<SecretPage isloggedIn={isloggedIn} />} />
          {/* <Route path='starship/*' element={<StarshipPage />}>
            <Route path=':id' element={<StarshipDetails selectedStarship={starshipId} />} />
          </Route> */}

          {/* <Route path='*' element={<LoginPage to='login' />} /> */}
        </Routes>
      </SwapiServiceContext.Provider>
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
