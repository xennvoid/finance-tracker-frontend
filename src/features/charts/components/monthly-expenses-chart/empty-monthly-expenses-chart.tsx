import { FC } from 'react';
import EmptyStateImage from '@components/empty-state-image';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router';
import { ROUTES } from '@routes/routes';

interface EmptyMonthlyExpensesChartProps {}

const EmptyMonthlyExpensesChart: FC<EmptyMonthlyExpensesChartProps> = ({}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, px: 1 }}>
      <Typography variant="h5" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
        No data to display yet.
      </Typography>
      <Typography sx={{ fontWeight: 500 }}>
        Try selecting a different <Link to={ROUTES.CARDS}>card.</Link>
      </Typography>
      <EmptyStateImage sx={{ maxHeight: 250 }} />
    </Box>
  );
};

export default EmptyMonthlyExpensesChart;
