import React, { useState, useContext } from 'react';
import ErrorBoundry from '../ErrorBoundry';
import ItemList from '../ItemList';
import ItemDetails from '../ItemDetails';
import Row from '../Row';
import './PeoplePage.css';
import { Record } from '../ItemDetails/ItemDetails';
import SwapiServiceContext from '../SwapiServiceContext/SwapiServiceContext';
import PersonDetails from './PersonDetails';
import PeopleList from './PeopleListOld';
import { Route, Routes } from 'react-router-dom';

const PeoplePage = ({ selectedPerson }) => {
  // const [state, setState] = useState({
  //   selectedPerson: null,
  // });

  const swapi = useContext(SwapiServiceContext);

  // const { selectedPerson } = state;
  const { getPerson, getPersonImage, getAllPeople } = swapi;

  // const onPersonSelected = (id) => {
  //   setState({ ...state, selectedPerson: id });
  //   // console.log('person id', id);
  // };

  return (
    <Row
      left={<ItemList getData={getAllPeople} />}
      // left={<PeopleList getData={getAllPeople} />}
      right={
        <PersonDetails
          // path='people/:id'
          selectedPerson={selectedPerson}
          getPerson={getPerson}
          getPersonImage={getPersonImage}
        />
      }
    />
  );
};

export default PeoplePage;
