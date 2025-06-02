import { useQuery } from '@tanstack/react-query';
import { getMonthlySummary } from '@features/transactions/services/get-monthly-summary.service';
import { IMonthlySummaryChartData } from '../types/monthly-summary-chart.types';

export const useMonthlySummaryChartData = ({
  previousMonthsAmount,
  cardId,
}: {
  previousMonthsAmount?: number;
  cardId: string;
}) => {
  const { data: summaryChartData = [] } = useQuery({
    queryKey: ['monthly-summary', previousMonthsAmount, cardId],
    enabled: !!cardId,
    queryFn: () => getMonthlySummary({ previousMonthsAmount, cardId }),
    select: (data): IMonthlySummaryChartData => {
      if (!data.length) return [];

      const { income, expense } = data[0];

      return [
        { name: 'Incomes', value: income },
        { name: 'Expenses', value: expense },
      ].filter((summary) => summary.value > 0);
    },
  });

  return { summaryChartData };
};
