import { TransactionsTypeFilter } from '@features/transactions/enums/transactions-filter.enum';
import { Tab, Tabs } from '@mui/material';
import { FC, SyntheticEvent } from 'react';

interface TransactionsTableTabsProps {
  filterValue: TransactionsTypeFilter;
  handleFilterChange: (_: SyntheticEvent, newValue: TransactionsTypeFilter) => void;
}

const TransactionsTableTabs: FC<TransactionsTableTabsProps> = ({
  filterValue,
  handleFilterChange,
}) => {
  return (
    <Tabs
      value={filterValue}
      onChange={handleFilterChange}
      textColor="secondary"
      indicatorColor="secondary"
      slotProps={{
        indicator: {
          sx: (theme) => ({ backgroundColor: theme.palette.custom.primaryBlue }),
        },
      }}
      sx={(theme) => ({
        '& .MuiTab-root': {
          ...theme.typography.body1,
          fontWeight: 500,
          color: theme.palette.custom.titleSecondary,
          textTransform: 'none',

          '&.Mui-selected': {
            color: theme.palette.custom.primaryBlue,
          },
        },
      })}>
      <Tab value={TransactionsTypeFilter.ALL} label="All Transactions" />
      <Tab value={TransactionsTypeFilter.INCOME} label="Income" />
      <Tab value={TransactionsTypeFilter.EXPENSE} label="Expense" />
    </Tabs>
  );
};

export default TransactionsTableTabs;
