import React, { useState, useEffect, useContext } from 'react';
import ErrorBoundry from '../ErrorBoundry';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import Row from '../Row';
import './PeoplePage.css';
import { Record } from '../ItemDetails/ItemDetails';
import SwapiServiceContext from '../SwapiServiceContext/SwapiServiceContext';
import PersonDetails from './PersonDetails';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../Spinner';

const PeopleList = ({ getData }) => {
  const [state, setState] = useState({
    itemList: [],
  });

  const { itemList } = state;

  useEffect(() => {
    getData()
      .then((data) =>
        setState(({ itemList }) => {
          return { ...state, itemList: [...data] };
          // return { ...state, people: [...people, ...data] };
        }),
      )
      .catch((err) => {
        console.error('Could not fetch', err);
      });
    // swapi.getPerson(3).then((p) => {
    //   // console.log(p.name);
    // });
  }, []); //!!!

  let navigate = useNavigate();

  if (!itemList) {
    return <Spinner />;
  }

  return (
    <div>
      <ul className='item-list list-group'>
        {itemList.map((item) => {
          const { id } = item;
          // const label = children(item);
          // const label = renderItem(item);
          return (
            <li
              className='list-group-item'
              key={id}
              onClick={() => {
                navigate(`${id}`);
              }}>
              <p>{item.name}</p>
            </li>
          ); 
        })}
      </ul>
    </div>
  );
};

export default PeopleList;
