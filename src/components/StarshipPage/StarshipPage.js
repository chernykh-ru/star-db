import React, { useState, useEffect, useContext } from 'react';
import ItemList from '../ItemList';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import SwapiServiceContext from '../SwapiServiceContext/SwapiServiceContext';
import './StarshipPage.css';
import StarshipList from './StarshipList';
import StarshipDetails from './StarshipDetails';

const StarshipPage = () => {
  // const [state, setState] = useState({
  //   selectedStarship: null,
  // });

  const swapi = useContext(SwapiServiceContext);

  // let location = useLocation();
  // console.log('location', location);
  // let { id } = useParams();
  // console.log('params from SP', id);

  // useEffect(() => {
  //   getStarshipId(id);

  //   return () => {
  //     getStarshipId(id);
  //   };
  // }, [id]);

  // const { selectedStarship } = state;
  const { getAllStarships } = swapi;

  // const onStarshipSelected = (id) => {
  //   setState({ ...state, selectedStarship: id });
  //   // console.log('person id', id);
  // };

  return (
    <>
      <StarshipList getData={getAllStarships} />
      {/* <StarshipDetails selectedStarship={id} /> */}
      {/* <Outlet /> */}
    </>
    // <StarshipList getData={getAllStarships} onStarshipSelected={parseInt(params.id, 10)} />
  );
};

export default StarshipPage;
