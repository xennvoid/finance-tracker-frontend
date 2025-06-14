import { useQuery } from '@tanstack/react-query';
import { getCards } from '../services/get-cards.service';
import { IRequestQueryParams } from 'types/request-query-params';

export const useGetCardsQuery = (queryParams?: IRequestQueryParams) =>
  useQuery({ queryKey: ['cards', queryParams], queryFn: () => getCards(queryParams) });
