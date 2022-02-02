import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList';
import SwapiService from '../../services/SwapiService';

const swapi = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarships } = swapi;

const PersonList = () => {};
const PlanetList = () => {};
const StarshipList = () => {};

export { PersonList, PlanetList, StarshipList };
