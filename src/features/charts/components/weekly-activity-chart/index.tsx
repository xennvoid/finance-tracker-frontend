import { FC } from 'react';
import { IDailyActivity } from '@features/transactions/types/daily-activity.types';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import WeeklyActivityChartLegend from './weekly-activity-chart-legend';
import WeeklyActivityChartTick from './weekly-activity-chart-tick';

interface WeeklyActivityChartProps {
  data: IDailyActivity[];
}

const WeeklyActivityChart: FC<WeeklyActivityChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%" debounce={350}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 40, right: 0, left: 0, bottom: 20 }}>
        <CartesianGrid strokeWidth={1} stroke="#F3F3F5" vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          dy={10}
          tick={(props) => <WeeklyActivityChartTick {...props} y={props.y + 15} />}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={(props) => <WeeklyActivityChartTick {...props} x={props.x - 10} y={props.y + 5} />}
        />
        <Bar dataKey="income" fill="#16DBCC" radius={20} isAnimationActive={false} />
        <Bar dataKey="expense" fill="#1814F3" radius={20} isAnimationActive={false} />
        <Legend
          iconType="circle"
          verticalAlign="top"
          align="right"
          wrapperStyle={{ top: 10 }}
          content={<WeeklyActivityChartLegend />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WeeklyActivityChart;
