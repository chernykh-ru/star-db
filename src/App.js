import React, { useState, useEffect } from 'react';
import SwapiService from './api/api';
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

  // const getResource = async (url, id) => {
  //   const res = await fetch(`${url}+${id}/`);

  //   if (!res.ok) {
  //     throw new Error(`Could not fetch ${url}${id}, received ${res.status}`);
  //   }//проверка был ли ответ успешным (статус в диапазоне 200–299)

  //   const data = await res.json();
  //   console.log(data);
  //   return data;
  // }; //синтаксис async/await

  // const getResource = (url, id) => {
  //   fetch(`${url} + ${id}/`)
  //     .then((res) => {
  //       console.log(res.status);
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setState(({ people }) => {
  //         return { ...state, people: [...people, data] };
  //       });
  //       console.log(data);
  //     });
  // };//синтаксис then

  // useEffect(() => {
  //   swapi
  //     .getPerson(1)
  //     .then((data) => {
  //       setState(({ people }) => {
  //         return { ...state, people: [...people, data] };
  //       });
  //     })
  //     .catch((err) => {
  //       console.error('Could not fetch', err);
  //     });
  //   // swapi
  //   //   .getStarships(9)
  //   //   .then((data) => {
  //   //     setState(({ starships }) => {
  //   //       return { ...state, starships: [...starships, data] };
  //   //     });
  //   //   })
  //   //   .catch((err) => {
  //   //     console.error('Could not fetch', err);
  //   //   });
  // }, []);

  // useEffect(() => {
  //   swapi.getAllStarships().then((data) => {
  //     setState({ ...state, starships: [...data] });
  //   });
  // }, []);

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
    <div className='App'>
      <header className='App-header'>
        <h2> Hello StarDB</h2>
        <div>
          {people.map((item) => {
            const { name, mass } = item;
            return (
              <div key={name}>
                <p>{`My name is ${name}, my mass ${mass}`}</p>
              </div>
            );
          })}
        </div>
        {/* <div>
          {starships.map((item) => {
            const { name, crew } = item;
            return (
              <div key={name}>
                <p>{`Starships name is ${name}, my crew ${crew} person`}</p>
              </div>
            );
          })}
        </div> */}
        {/* <div>
          <p>{people[0].name}</p>
          <p>{people[0].mass}</p>
        </div> */}

        {/* <button
          onClick={() => console.log('test button clicked')}
          className='btn btn-outline-secondary'>
          Test button
        </button> */}
      </header>
    </div>
  );
}

export default App;
