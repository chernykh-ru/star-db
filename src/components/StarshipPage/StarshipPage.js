import React, { useState, useEffect, useContext } from 'react';
import ItemList from '../ItemList';
import { useLocation, useParams, Outlet, Route, Routes } from 'react-router-dom';
import SwapiServiceContext from '../SwapiServiceContext/SwapiServiceContext';
import './StarshipPage.css';
import StarshipList from './StarshipListOld';
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
    <ItemList getData={getAllStarships} />

    // <>
    //   <StarshipList getData={getAllStarships} />
    //   {/* <Routes>
    //     <Route path=':id' element={<StarshipDetails selectedStarship={10} />} />
    //   </Routes> */}

    //   {/* <Outlet /> */}
    // </>
  );
};

export default StarshipPage;
