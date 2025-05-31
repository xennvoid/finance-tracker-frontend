import { axiosInstance } from '@api/axios-instance';
import { TRANSACTION_ENDPOINTS } from '@constants/api-endpoints/transaction';
import { IGetMonthlySummary } from '../types/get-monthly-summary.types.';

export const getMonthlySummary = async ({
  previousMonthsAmount,
  cardId,
}: {
  previousMonthsAmount?: number;
  cardId: string;
}) => {
  const limit = previousMonthsAmount;

  const response = await axiosInstance.get<void, IGetMonthlySummary>(
    TRANSACTION_ENDPOINTS.MONTHLY_SUMMARY,
    {
      params: {
        limit,
        cardId,
      },
    },
  );
  return response.data;
};
