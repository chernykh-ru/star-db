import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/SwapiService';
import ItemList from '../ItemList';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PersonDetails from '../PersonDetails';
import './App.css';

const swapi = new SwapiService();

function App() {
  const [state, setState] = useState({
    people: [],
    starships: [],
    planets: [{}],
  });

  const { people, starships } = state;
  console.log('people', people);
  console.log('starships', starships);

  useEffect(() => {
    swapi
      .getAllPeople()
      .then((data) =>
        setState(({ people }) => {
          return { ...state, people: [...data] };
          // return { ...state, people: [...people, ...data] };
        }),
      )
      .catch((err) => {
        console.error('Could not fetch', err);
      });
    swapi.getPerson(3).then((p) => {
      console.log(p.name);
    });
  }, []);

  return (
    <div>
      <Header />
      <RandomPlanet />
      <div className='row mb2'>
        <div className='col md-6'>
          <ItemList people={people} />
        </div>
        <div className='col md-6'>
          <PersonDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
