import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ItemList = ({ getData }) => {
  const [state, setState] = useState({
    itemList: [],
  });

  const { itemList } = state;

  useEffect(() => {
    getData()
      .then((data) =>
        setState(({ itemList }) => {
          return { ...state, itemList: [...data] };
        }),
      )
      .catch((err) => {
        console.error('Could not fetch', err);
      });
  }, []);

  let navigate = useNavigate();

  if (!itemList) {
    return <Spinner />;
  }

  return (
    <div>
      <ul className='item-list list-group'>
        {itemList.map((item) => {
          const { id } = item;
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

export default ItemList;
