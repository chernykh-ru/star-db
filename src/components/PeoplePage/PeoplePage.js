import React, { useState } from 'react';
import SwapiService from '../../services/SwapiService';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import './PeoplePage.css';

const swapi = new SwapiService();

const PeoplePage = () => {
  const [state, setState] = useState({
    selectedPerson: null,
  });

  const { selectedPerson } = state;

  const onPersonSelected = (id) => {
    setState({ ...state, selectedPerson: id });
    // console.log('person id', id);
  };

  return (
    <div className='row mb2 page'>
      <div className='col md-6'>
        <ItemList
          onItemSelected={onPersonSelected}
          getData={swapi.getAllPeople}
          renderItem={({ name, gender, birthYear }) => `${name} (${gender} ${birthYear})`}
        />
      </div>
      <div className='col md-6'>
        {selectedPerson && <PersonDetails personId={selectedPerson} />}
      </div>
    </div>
  );
};

export default PeoplePage;
