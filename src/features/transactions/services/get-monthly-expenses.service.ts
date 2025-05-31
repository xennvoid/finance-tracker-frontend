import { axiosInstance } from '@api/axios-instance';
import { TRANSACTION_ENDPOINTS } from '@constants/api-endpoints/transaction';
import { IGetMonthlyExpenses } from '../types/get-monthly-expenses';

export const getMonthlyExpenses = async ({
  previousMonthsAmount,
  cardId,
}: {
  previousMonthsAmount?: number;
  cardId: string;
}) => {
  const limit = previousMonthsAmount;

  const response = await axiosInstance.get<void, IGetMonthlyExpenses>(
    TRANSACTION_ENDPOINTS.MONTHLY_EXPENSES,
    {
      params: {
        limit,
        cardId,
      },
    },
  );
  return response.data;
};
