import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import ErrorButton from '../ErrorButton';
import './PersonDetails.css';

const swapi = new SwapiService();

const PersonDetails = ({ personId }) => {
  const [state, setState] = useState({ person: {}, loading: true, error: false });

  const { person, loading, error } = state;

  // console.log('person ditails state', state);
  // console.log('person ditails selectedPerson', selectedPerson);

  const onPersonLoaded = (person) => {
    // console.log('onPersonLoaded', person);

    setState({ person, loading: false });
  };

  const onError = (err) => {
    setState({ ...state, error: true, loading: false });
    console.error('Could not fetch', err);
  };

  useEffect(() => {
    swapi.getPerson(personId).then(onPersonLoaded).catch(onError);
  }, [personId]);

  const hasData = !(loading || error);

  return (
    <div className='person-details card'>
      {loading && <Spinner />}
      {error && <ErrorIndicator />}
      {hasData && <PersonView person={person} />}
    </div>
  );
};

const PersonView = ({ person }) => {
  const { id, gender, birthYear, eyeColor, name } = person;
  return (
    <>
      <img
        className='person-image'
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt='placeholder'
      />
      <div className='card-body'>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Gender: {gender}</span>
            {/* <span>male</span> */}
          </li>
          <li className='list-group-item'>
            <span className='term'>Birth Year: {birthYear}</span>
            {/* <span>43</span> */}
          </li>
          <li className='list-group-item'>
            <span className='term'>Eye Color: {eyeColor}</span>
            {/* <span>red</span> */}
          </li>
        </ul>
        <div className='throw-error'>
          <ErrorButton />
        </div>
      </div>
    </>
  );
};

export default PersonDetails;
