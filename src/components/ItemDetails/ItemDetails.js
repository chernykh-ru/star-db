import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';
import ErrorButton from '../ErrorButton';

import './ItemDetails.css';

const swapi = new SwapiService();

export const Record = ({ item, field, label }) => {
  return (
    <li className='list-group-item'>
      <span className='term'>{label}</span>
      {/* <span>{field}</span> */}
      <span>{item[field]}</span>
    </li>
  );
};

const ItemDetails = ({ itemId, getData, getImageUrl, children }) => {
  const [state, setState] = useState({ item: {}, image: null, loading: true, error: false });

  const { item, image, loading, error } = state;

  // console.log('person ditails state', state);
  // console.log('person ditails selectedPerson', selectedPerson);

  const onItemLoaded = (item) => {
    // console.log('onPersonLoaded', person);

    setState({ item, image: getImageUrl(item), loading: false });
  };

  const onError = (err) => {
    setState({ ...state, error: true, loading: false });
    console.error('Could not fetch', err);
  };

  useEffect(() => {
    getData(itemId).then(onItemLoaded).catch(onError);
    // swapi.getPerson(itemId).then(onItemLoaded).catch(onError);
  }, [itemId]);

  const hasData = !(loading || error);

  return (
    <div className='item-details card'>
      {loading && <Spinner />}
      {error && <ErrorIndicator />}
      {hasData && <ItemView item={item} image={image} children={children} />}
    </div>
  );
};

const ItemView = ({ item, image, children }) => {
  const { id, gender, birthYear, eyeColor, name } = item;
  return (
    <>
      <img
        className='item-image'
        src={image}
        // src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt='Sorry, the icon is lost.'
      />
      <div className='card-body'>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { item });
          })}
          {/* {children} */}
          {/* <li className='list-group-item'>
            <span className='term'>Gender: {gender}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Birth Year: {birthYear}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Eye Color: {eyeColor}</span>
          </li> */}
        </ul>
        <div className='throw-error'>
          <ErrorButton />
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
