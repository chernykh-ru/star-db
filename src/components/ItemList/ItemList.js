import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import './ItemList.css';

const swapi = new SwapiService();

function ItemList({ onItemSelected }) {
  const [state, setState] = useState({
    peopleList: [],
  });

  const { peopleList } = state;

  console.log('state ItemList', state);

  useEffect(() => {
    swapi
      .getAllPeople()
      .then((data) =>
        setState(({ peopleList }) => {
          console.log('data', data);
          return { ...state, peopleList: [...data] };
          // return { ...state, people: [...people, ...data] };
        }),
      )
      .catch((err) => {
        console.error('Could not fetch', err);
      });
    // swapi.getPerson(3).then((p) => {
    //   // console.log(p.name);
    // });
  }, []);

  if (!peopleList) {
    return <Spinner />;
  }

  return (
    <div>
      <h2>ItemList</h2>
      <ul className='item-list list-group'>
        {peopleList.map((item) => {
          const { name, id } = item;
          return (
            <li className='list-group-item' key={id} onClick={() => onItemSelected(id)}>
              <p>{`${name}`}</p>
            </li>
          );
        })}
      </ul>
    </div> 
  );
}

export default ItemList;
