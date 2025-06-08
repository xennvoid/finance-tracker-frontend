import { useQuery } from '@tanstack/react-query';
import { IGetWeeklyActivityParams } from '@features/transactions/types/get-weekly-activity.types';
import { getWeeklyActivity } from '@features/transactions/services/get-weekly-activity.service';

export const useWeeklyActivityChartData = ({ cardId }: IGetWeeklyActivityParams) => {
  const { data: weeklyActivityChartData = [] } = useQuery({
    queryKey: ['weekly-activity', cardId],
    enabled: !!cardId,
    queryFn: () => getWeeklyActivity({ cardId }),
  });

  return { weeklyActivityChartData };
};
