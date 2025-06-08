import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import EmptyStateImage from '@components/empty-state-image';

interface EmptyWeeklyActivityChartProps {}

const EmptyWeeklyActivityChart: FC<EmptyWeeklyActivityChartProps> = ({}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, px: 1 }}>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        No data to display yet.
      </Typography>
      <Typography sx={{ fontWeight: 500 }}>Try selecting a different card.</Typography>
      <EmptyStateImage />
    </Box>
  );
};

export default EmptyWeeklyActivityChart;
