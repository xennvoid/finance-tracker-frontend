import { FC } from 'react';
import { PieLabelRenderProps } from 'recharts';

const RADIAN = Math.PI / 180;

const MonthlySummaryChartLabel: FC<PieLabelRenderProps> = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name,
}) => {
  const radius = Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) * 0.6;
  const x = Number(cx) + radius * Math.cos(-midAngle * RADIAN);
  const y = Number(cy) + radius * Math.sin(-midAngle * RADIAN);

  const value = Number((Number(percent) * 100).toFixed(0));
  const shouldShowLabel = value >= 20;

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="middle"
      style={{ fontWeight: 500 }}>
      <tspan x={x}>{`${value}%`}</tspan>
      {shouldShowLabel && (
        <tspan x={x} dy="1em">
          {name}
        </tspan>
      )}
    </text>
  );
};

export default MonthlySummaryChartLabel;
