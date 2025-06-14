import { IRequestQueryParams } from 'types/request-query-params';
import { useGetCardsQuery } from './use-get-cards-query';

export const useCardsData = (queryParams?: IRequestQueryParams) => {
  const { data, isLoading } = useGetCardsQuery(queryParams);

  if (!data) return { data: [], isLoading };

  return { data: data.data, pagination: data.pagination, isLoading };
};
