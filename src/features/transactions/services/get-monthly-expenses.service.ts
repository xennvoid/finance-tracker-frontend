import { axiosInstance } from '@api/axios-instance';
import { TRANSACTION_ENDPOINTS } from '@constants/api-endpoints/transaction';
import { IGetMonthlyExpenses } from '../types/get-monthly-expenses';

export const getMonthlyExpenses = async (previousMonthsAmount?: number) => {
  const limit = previousMonthsAmount;

  const response = await axiosInstance.get<void, IGetMonthlyExpenses>(
    TRANSACTION_ENDPOINTS.MONTHLY_EXPENSES,
    {
      params: {
        limit,
      },
    },
  );
  return response.data;
};
