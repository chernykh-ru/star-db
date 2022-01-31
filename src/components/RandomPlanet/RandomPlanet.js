import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner/Spinner';
import './RandomPlanet.css';

const swapi = new SwapiService();

// const randomPlanetIndex = () => {
//   const idx = Math.abs(Math.trunc(Math.random() * 100));
//   return idx;
// };

const RandomPlanet = () => {
  const [state, setState] = useState({
    planet: {},
    // id: null,
    // name: '',
    // population: null,
    // rotationPeriod: null,
    // diameter: null,
  });

  const {
    planet: { id, population, rotationPeriod, diameter, name },
  } = state;

  const onPlanetLoaded = (planet) => {
    setState({ planet });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const id = Math.floor(Math.random() * 18 + 2);
      swapi
        .getPlanet(id)
        // .getPlanet(randomPlanetIndex())
        .then(onPlanetLoaded)
        // .then((data) =>
        //   setState((planet) => {
        //     console.log('randomPlanetData', data);

        //     return { ...state, planet: { ...data } };
        //     // return { ...state, people: [...people, ...data] };
        //   }),
        // )
        .catch((err) => {
          console.error('Could not fetch', err);
        });
    }, 10000000000);
    return () => {
      clearInterval(intervalId);
    }; //cleanup function
  }, []);

  // useEffect(() => {
  //   swapi
  //     .getPlanets(randomPlanetIndex())
  //     .then((data) =>
  //       setState((state) => {
  //         console.log('randomPlanetData', data);

  //         return { ...data };
  //         // return { ...state, people: [...people, ...data] };
  //       }),
  //     )
  //     .catch((err) => {
  //       console.error('Could not fetch', err);
  //     });
  // }, []);

  console.log('randomPlanet state', state);

  // console.log(Math.abs(Math.trunc(Math.random() * 100)));

  return (
    <div className='random-planet jumbotron rounded'>
      <img
        className='planet-image'
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt='placeholder'></img>
      <div>
        <h4>Planet: {name}</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Population: {population} residents</span>
            {/* <span>{population}</span> */}
          </li>
          <li className='list-group-item'>
            <span className='term'>Rotation period of {rotationPeriod} hours</span>
            {/* <span>{rotationPeriod}</span> */}
          </li>
          <li className='list-group-item'>
            <span className='term'>Diameter: {diameter} km</span>
            {/* <span>{diameter}</span> */}
          </li>
        </ul>
      </div>
      {/* <Spinner /> */}
    </div>
  );
};

export default RandomPlanet;
