import { COUNTRY_ENDPOINTS } from '@constants/api-endpoints/country';
import { countriesApiInstance } from '../api/countries-api-instance';
import { IGetCountriesByNameResponse } from '../types/get-countries-by-name.types';

export const getCountriesByName = async (countryName: string, exactMatch: boolean = false) => {
  const response = await countriesApiInstance<void, IGetCountriesByNameResponse>(
    COUNTRY_ENDPOINTS.BY_NAME(countryName),
    {
      params: {
        fullText: exactMatch ? true : false,
      },
    },
  );

  return response.data;
};
