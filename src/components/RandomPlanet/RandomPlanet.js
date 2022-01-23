import React from 'react';
import './RandomPlanet.css';

function RandomPlanet() {
  return (
    <div className='random-planet jumbotron rounded'>
      <img className='planet-image' src='https://via.placeholder.com/150' alt='placeholder'></img>
      <div>
        <h4>RandomPlanet</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Population</span>
            {/* <span>{population}</span> */}
          </li>
          <li className='list-group-item'>
            <span className='term'>Rotation Period</span>
            {/* <span>{rotationPeriod}</span> */}
          </li>
          <li className='list-group-item'>
            <span className='term'>Diameter</span>
            {/* <span>{diameter}</span> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RandomPlanet;
