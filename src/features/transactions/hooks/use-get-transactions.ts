import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getTransactions } from '../services/get-transactions.service';
import { IGetTransactionsQueryParams } from '../types/get-transactions.types';

export const useGetTransactions = (queryParams?: IGetTransactionsQueryParams) =>
  useQuery({
    queryKey: ['transactions', queryParams],
    queryFn: () => getTransactions(queryParams),
    placeholderData: keepPreviousData,
  });
