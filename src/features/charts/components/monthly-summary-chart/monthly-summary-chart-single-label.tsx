import { FC } from 'react';
import { PieLabelRenderProps } from 'recharts';

const MonthlySummaryChartSingleLabel: FC<PieLabelRenderProps> = ({ cx, cy, percent, name }) => {
  const value = Number((Number(percent) * 100).toFixed(0));

  return (
    <text x={cx} y={cy} fill="white" textAnchor="middle" dominantBaseline="middle">
      <tspan x={cx}>{`${value}%`}</tspan>
      <tspan x={cx} dy="1.5em">
        {name}
      </tspan>
    </text>
  );
};

export default MonthlySummaryChartSingleLabel;
