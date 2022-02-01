export default class SwapiService {
  _baseURL = 'https://swapi.dev/api/';

  //трансформируем данные с сервера в удобный нам вид

  _extractId(item) {
    const _idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(_idRegExp)[1];
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  async getResource(url) {
    const res = await fetch(`${this._baseURL}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._baseURL}${url}, received ${res.status}`);
    } //проверка был ли ответ успешным (статус в диапазоне 200–299)

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`people/`);
    return res.results.map(this._transformPerson);
  }

  // async getAllPeople() {
  //   const res = await this.getResource(`people/`);
  //   // console.log('res.results', res.results);
  //   return res.results;
  //   // const data = res.results;
  //   // return data;
  // }

  async getPerson(id) {
    const person = await this.getResource(`people/${id}/`);
    return this._transformPerson(person);
  }

  async getAllStarships() {
    const res = await this.getResource(`starships/`);
    return res.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = await this.getResource(`starships/${id}/`);
    return this._transformStarship(starship);
  }

  async getAllPlanets() {
    const res = await this.getResource(`planets/`);
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`planets/${id}/`);
    return this._transformPlanet(planet);
  }
}

// export const swapi = new SwapiService();

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
