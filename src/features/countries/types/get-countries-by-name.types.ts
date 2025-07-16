import { IApiResponse } from 'types/api-response.types';
import { ICountry } from './country.types';

export type IGetCountriesByNameResponse = IApiResponse<ICountry[]>;
