import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import PropTypes from 'prop-types';
import './RandomPlanet.css';

const swapi = new SwapiService();

const RandomPlanet = ({ updateInterval = 60000 }) => {
  const [state, setState] = useState({
    planet: {},
    loading: true,
    error: false,
  });

  const { planet, loading, error } = state;

  const onPlanetLoaded = (planet) => {
    setState({ planet, loading: false });
  };

  const onError = (err) => {
    setState({ ...state, error: true, loading: false });
    console.error('Could not fetch', err);
  };

  useEffect(() => {
    const { intervalId } = setInterval(() => {
      const id = Math.floor(Math.random() * 25 + 2);
      swapi.getPlanet(id).then(onPlanetLoaded).catch(onError);
    }, updateInterval);
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

  const hasData = !(loading || error);

  return (
    <div className='random-planet jumbotron rounded'>
      {loading && <Spinner />}
      {error && <ErrorIndicator />}
      {hasData && <PlanetView planet={planet} />}
    </div>
  );
};

RandomPlanet.propTypes = {
  updateInterval: PropTypes.number,
};

// RandomPlanet.propTypes = {
//   updateInterval: (props, propName, componentName) => {
//     const value = props[propName];

//     if (typeof value === 'number' && !isNaN(value)) {
//       return null;
//     }
//     return new TypeError(`${componentName}: ${propName} must be number `);
//   },
// };
// RandomPlanet.defaultProps = {
//   updateInterval: 60000,
// };

const PlanetView = ({ planet }) => {
  const { id, population, rotationPeriod, diameter, name } = planet;
  return (
    <>
      <img
        className='planet-image'
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt='Sorry, the planet is lost.'
      />
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
    </>
  );
};

export default RandomPlanet;
