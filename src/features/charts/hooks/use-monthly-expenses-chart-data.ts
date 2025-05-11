import { useQuery } from '@tanstack/react-query';
import { getMonthlyExpenses } from '@features/transactions/services/get-monthly-expenses.service';
import { IExpensesChartData } from '../types/expenses-chart.types';

export const useMonthlyExpensesChartData = (previousMonthsAmount?: number) => {
  const { data: expensesChartData = [] } = useQuery({
    queryKey: ['monthly-expenses'],
    queryFn: () => getMonthlyExpenses(previousMonthsAmount),
    select: (data): IExpensesChartData =>
      data.map((expense) => ({
        name: new Date(expense.year, expense.month).toLocaleString('default', { month: 'short' }),
        value: expense.total,
      })),
  });

  return { expensesChartData };
};
