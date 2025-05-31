import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { formatCurrency } from '@utils/formatters/format-currency';
import { IMonthlySummaryChartData } from '@features/charts/types/monthly-summary-chart.types';

interface MonthlySummaryChartLegendProps {
  chartData: IMonthlySummaryChartData;
  currency: string;
  chartDataColors: string[];
}

const MonthlySummaryChartLegend: FC<MonthlySummaryChartLegendProps> = ({
  chartData,
  currency,
  chartDataColors,
}) => {
  return (
    <Box
      component="ul"
      sx={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
      }}>
      {chartData.map((entry, index) => (
        <Box
          component="li"
          key={`item-${index}`}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            padding: '4px 8px',
            borderRadius: 1,
            backgroundColor: '#f9f9f9',
            boxShadow: '0 0 4px rgba(0, 0, 0, 0.05)',
          }}>
          <Box
            sx={{
              width: 12,
              height: 12,
              backgroundColor: chartDataColors[index],
              borderRadius: '50%',
              flexShrink: 0,
            }}
          />
          <Typography
            variant="body2"
            noWrap
            sx={(theme) => ({ color: theme.palette.text.secondary, fontWeight: 600 })}>
            {String(entry.name).toLocaleUpperCase()}
          </Typography>
          {' - '}
          <Typography
            variant="body2"
            noWrap
            sx={(theme) => ({ color: theme.palette.text.primary, fontWeight: 500 })}>
            {formatCurrency(entry.value, currency)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default MonthlySummaryChartLegend;
