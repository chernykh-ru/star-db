import React, { useState, useEffect } from 'react';
// import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import './ItemList.css';

// const swapi = new SwapiService();

const ItemList = ({ onItemSelected, getData }) => {
  const [state, setState] = useState({
    itemList: [],
  });

  const { itemList } = state;

  console.log('state ItemList', state);

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
  }, []);

  if (!itemList) {
    return <Spinner />;
  }

  return (
    <div>
      {/* <h2>ItemList</h2> */}
      <ul className='item-list list-group'>
        {itemList.map((item) => {
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
};

export default ItemList;
