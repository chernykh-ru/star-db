import React, { useState, useEffect } from 'react';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';
import './ItemList.css';

const ItemList = ({ onItemSelected, getData, renderItem, children }) => {
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
  }, [getData]);

  if (!itemList) {
    return <Spinner />;
  }

  return (
    <div>
      <ul className='item-list list-group'>
        {itemList.map((item) => {
          const { id } = item;
          const label = children(item);
          // const label = renderItem(item);
          return (
            <li className='list-group-item' key={id} onClick={() => onItemSelected(id)}>
              <p>{label}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default ItemList;
