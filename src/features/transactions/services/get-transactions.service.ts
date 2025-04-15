import { axiosInstance } from '@api/axios-instance';
import { TRANSACTION_ENDPOINTS } from '@constants/api-endpoints/transaction';
import { IGetTransactionsResponse } from '../types/get-transactions.types';
import { IRequestQueryParams } from 'types/request-query-params';

export const getTransactions = async (queryParams?: IRequestQueryParams) => {
  const response = await axiosInstance.get<void, IGetTransactionsResponse>(
    TRANSACTION_ENDPOINTS.TRANSACTIONS,
    {
      params: queryParams,
    },
  );

  return response.data;
};
