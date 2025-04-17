import { useQuery } from '@tanstack/react-query';
import { getTransactions } from '../services/get-transactions.service';
import { IRequestQueryParams } from 'types/request-query-params';

export const useGetTransactions = (queryParams?: IRequestQueryParams) =>
  useQuery({
    queryKey: ['transactions', queryParams],
    queryFn: () => getTransactions(queryParams),
  });
