import { axiosInstance } from '@api/axios-instance';
import {
  ICreateTransactionRequestBody,
  ICreateTransactionResponse,
} from '../types/create-transaction.types';
import { TRANSACTION_ENDPOINTS } from '@constants/api-endpoints/transaction';

export const createTransaction = async (transaction: ICreateTransactionRequestBody) => {
  const response = await axiosInstance.post<void, ICreateTransactionResponse>(
    TRANSACTION_ENDPOINTS.TRANSACTIONS,
    transaction,
  );

  return response.data;
};
