import axios from 'axios';

export const countriesApiInstance = axios.create({ baseURL: 'https://restcountries.com/v3.1' });
