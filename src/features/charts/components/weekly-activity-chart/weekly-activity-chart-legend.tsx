import { FC } from 'react';
import { LegendProps } from 'recharts';
import { Box, List, ListItem } from '@mui/material';

const WeeklyActivityChartLegend: FC<LegendProps> = (props) => {
  const { payload } = props;

  return (
    <List sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      {payload?.map((entry, index) => (
        <ListItem
          key={`item-${index}`}
          sx={(theme) => ({
            gap: 1,
            width: 'unset',
            color: theme.palette.custom.titleSecondary,
            textTransform: 'capitalize',
          })}>
          <Box sx={{ width: 15, height: 15, borderRadius: '50%', backgroundColor: entry.color }} />
          {entry.value}
        </ListItem>
      ))}
    </List>
  );
};

export default WeeklyActivityChartLegend;
