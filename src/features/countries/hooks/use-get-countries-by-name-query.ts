import { useQuery } from '@tanstack/react-query';
import { getCountriesByName } from '../services/get-countries-by-name.service';

export const useGetCountriesByNameQuery = (countryName: string) =>
  useQuery({
    queryKey: ['countries', countryName],
    queryFn: () => getCountriesByName(countryName),
    enabled: !!countryName && countryName.length >= 2,
    select: (countries) => countries.map((country) => country.name.common),
  });
