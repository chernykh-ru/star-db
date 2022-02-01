import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import ErrorButton from '../ErrorButton';
import './ItemDetails.css';

const swapi = new SwapiService();

const ItemDetails = ({ itemId }) => {
  const [state, setState] = useState({ item: {}, loading: true, error: false });

  const { item, loading, error } = state;

  // console.log('person ditails state', state);
  // console.log('person ditails selectedPerson', selectedPerson);

  const onItemLoaded = (item) => {
    // console.log('onPersonLoaded', person);

    setState({ item, loading: false });
  };

  const onError = (err) => {
    setState({ ...state, error: true, loading: false });
    console.error('Could not fetch', err);
  };

  useEffect(() => {
    swapi.getPerson(itemId).then(onItemLoaded).catch(onError);
  }, [itemId]);

  const hasData = !(loading || error);

  return (
    <div className='item-details card'>
      {loading && <Spinner />}
      {error && <ErrorIndicator />}
      {hasData && <ItemView item={item} />}
    </div>
  );
};

const ItemView = ({ item }) => {
  const { id, gender, birthYear, eyeColor, name } = item;
  return (
    <>
      <img
        className='item-image'
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

export default ItemDetails;
