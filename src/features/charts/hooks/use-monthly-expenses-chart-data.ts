import { useQuery } from '@tanstack/react-query';
import { getMonthlyExpenses } from '@features/transactions/services/get-monthly-expenses.service';
import { IExpensesChartData } from '../types/expenses-chart.types';

export const useMonthlyExpensesChartData = ({
  previousMonthsAmount,
  cardId,
}: {
  previousMonthsAmount?: number;
  cardId: string;
}) => {
  const { data: expensesChartData = [] } = useQuery({
    queryKey: ['monthly-expenses', previousMonthsAmount, cardId],
    enabled: !!cardId,
    queryFn: () => getMonthlyExpenses({ previousMonthsAmount, cardId }),
    select: (data): IExpensesChartData =>
      data.map((expense) => ({
        name: new Date(expense.year, expense.month).toLocaleString('default', { month: 'short' }),
        value: expense.total,
      })),
  });

  return { expensesChartData };
};
