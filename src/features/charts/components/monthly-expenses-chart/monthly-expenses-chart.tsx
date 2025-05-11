import { FC } from 'react';
import { useTheme } from '@mui/material';
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis } from 'recharts';
import CurrencyLabel from './currency-label';
import { IExpensesChartData } from '@features/charts/types/expenses-chart.types';

interface MonthlyExpensesChartProps {
  chartData: IExpensesChartData;
  activeIndex: number;
  handleActiveIndexChange: (_: unknown, index: number) => void;
}

const MonthlyExpensesChart: FC<MonthlyExpensesChartProps> = ({
  chartData,
  activeIndex,
  handleActiveIndexChange,
}) => {
  const { palette } = useTheme();

  return (
    <ResponsiveContainer width="100%" height={225} debounce={200}>
      <BarChart data={chartData} margin={{ top: 20 }}>
        <XAxis
          dataKey="name"
          stroke={palette.custom.titleSecondary}
          fontSize={13}
          tickLine={false}
          axisLine={false}
        />
        <Bar
          isAnimationActive={false}
          dataKey="value"
          radius={10}
          label={(props) => <CurrencyLabel {...props} activeIndex={activeIndex} />}
          onClick={handleActiveIndexChange}>
          {chartData.map((_, index) => (
            <Cell
              cursor="pointer"
              fill={index === activeIndex ? '#16dbcc' : '#edf0f7'}
              key={`cell-${index}`}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MonthlyExpensesChart;
