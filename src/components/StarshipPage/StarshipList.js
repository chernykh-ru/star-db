import React, { useState, useEffect } from 'react';
import Spinner from '../Spinner';
// import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import '../ItemList/ItemList.css';

// export const StarshipList = ({ getAllStarships, onStarshipSelected }) => {
//   return (
//     <ItemList getData={getAllStarships} onItemSelected={onStarshipSelected}>
//       {({ name }) => <span>{name}</span>}
//     </ItemList>
//   );
// };

const StarshipList = ({ getData }) => {
  const [state, setState] = useState({
    itemList: [],
  });

  const { itemList } = state;

  // console.log('state ItemList', state);

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
  // let params = useParams();
  // console.log(params.id);

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
              {/* <Link to={`/starship/${id}`}>{label}</Link> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// StarshipList.propTypes = {
//   onStarshipSelected: PropTypes.number.isRequired,
//   getData: PropTypes.func.isRequired,
//   children: PropTypes.func.isRequired,
// };

export default StarshipList;
