import { FC, useMemo } from 'react';
import { IMonthlySummaryChartData } from '@features/charts/types/monthly-summary-chart.types';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import MonthlySummaryChartLabel from './montly-summary-chart-label';
import MonthlySummaryChartLegend from './monthly-summary-chart-legend';
import MonthlySummaryChartSingleLabel from './monthly-summary-chart-single-label';

interface MonthlySummaryChartProps {
  chartData: IMonthlySummaryChartData;
  currency: string;
}

const COLORS = ['#1814F3', '#343C6A', '#FC7900', '#FA00FF'];

const MonthlySummaryChart: FC<MonthlySummaryChartProps> = ({ chartData, currency }) => {
  const chartDataColors = useMemo(
    () => chartData.map((_, index) => COLORS[index % COLORS.length]),
    [chartData.length],
  );

  return (
    <>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            width={300}
            height={300}
            isAnimationActive={false}
            data={chartData}
            labelLine={false}
            label={
              chartData.length === 1
                ? (props) => <MonthlySummaryChartSingleLabel {...props} />
                : (props) => <MonthlySummaryChartLabel {...props} />
            }
            dataKey="value"
            stroke={chartData.length === 1 ? 'none' : '#fff'}>
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={chartDataColors[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <MonthlySummaryChartLegend
        chartData={chartData}
        currency={currency}
        chartDataColors={chartDataColors}
      />
    </>
  );
};

export default MonthlySummaryChart;
