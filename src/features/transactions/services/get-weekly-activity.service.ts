import { axiosInstance } from '@api/axios-instance';
import { TRANSACTION_ENDPOINTS } from '@constants/api-endpoints/transaction';
import { IGetWeeklyActivity, IGetWeeklyActivityParams } from '../types/get-weekly-activity.types';

export const getWeeklyActivity = async ({ cardId }: IGetWeeklyActivityParams) => {
  const response = await axiosInstance.get<void, IGetWeeklyActivity>(
    TRANSACTION_ENDPOINTS.WEEKLY_ACTIVITY,
    {
      params: { cardId },
    },
  );

  return response.data;
};
