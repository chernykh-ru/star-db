import React from 'react';
import './ItemList.css';

function ItemList({ people }) {
  return (
    <div>
      <h2>ItemList</h2>
      <ul className='item-list list-group'>
        {people.map((item) => {
          const { name, mass } = item;
          return (
            <li className='list-group-item' key={name}>
              <p>{`My name is ${name}, my mass ${mass}`}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ItemList;
