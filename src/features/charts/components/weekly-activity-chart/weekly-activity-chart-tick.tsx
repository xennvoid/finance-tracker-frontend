import { FC } from 'react';
import { useTheme } from '@mui/material';
import { RechartsTickProps } from '@features/charts/types/rechart.types';

const WeeklyActivityChartTick: FC<RechartsTickProps> = ({ x, y, payload }) => {
  const theme = useTheme();

  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      fontSize={theme.typography.body2.fontSize}
      fontWeight={theme.typography.fontWeightMedium}
      fill={theme.palette.custom.titleSecondary}>
      {payload.value}
    </text>
  );
};

export default WeeklyActivityChartTick;
