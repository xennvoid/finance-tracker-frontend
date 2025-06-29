import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import EmptyStateImage from '@components/empty-state-image';
import { Link } from 'react-router';
import { ROUTES } from '@routes/routes';

interface EmptyWeeklyActivityChartProps {}

const EmptyWeeklyActivityChart: FC<EmptyWeeklyActivityChartProps> = ({}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, px: 1 }}>
      <Typography variant="h5" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
        No data to display yet.
      </Typography>
      <Typography sx={{ fontWeight: 500 }}>
        Try selecting a different <Link to={ROUTES.CARDS}>card.</Link>
      </Typography>
      <EmptyStateImage />
    </Box>
  );
};

export default EmptyWeeklyActivityChart;
