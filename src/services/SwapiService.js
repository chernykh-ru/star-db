export default class SwapiService {
  _baseURL = 'https://swapi.dev/api/';

  async getResource(url) {
    const res = await fetch(`${this._baseURL}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._baseURL}${url}, received ${res.status}`);
    } //проверка был ли ответ успешным (статус в диапазоне 200–299)

    return await res.json();
    // const data = await res.json();
    // // console.log(data);
    // return data;
  }

  async getAllPeople() {
    const res = await this.getResource(`people/`);
    // console.log('res.results', res.results);
    return res.results;
    // const data = res.results;
    // return data;
  }

  getPerson(id) {
    return this.getResource(`people/${id}/`);
  }

  async getAllStarships() {
    const res = await this.getResource(`starships/`);
    return res.results;
  }

  getStarships(id) {
    return this.getResource(`starships/${id}/`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`planets/`);
    return res.results;
  }

  getPlanets(id) {
    return this.getResource(`planets/${id}/`);
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
