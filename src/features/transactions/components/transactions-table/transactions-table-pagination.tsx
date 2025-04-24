import { Pagination, PaginationItem, PaginationProps } from '@mui/material';
import { FC } from 'react';

interface TransactionsTablePaginationsProps extends PaginationProps {}

const TransactionsTablePaginations: FC<TransactionsTablePaginationsProps> = (props) => {
  return (
    <Pagination
      sx={{ py: 1 }}
      shape="rounded"
      renderItem={(item) => (
        <PaginationItem
          sx={(theme) => ({
            color: theme.palette.custom.primaryBlue,
            fontWeight: 500,
            fontSize: theme.typography.body1.fontSize,
            height: 'unset',
            padding: '0.5rem 1rem',

            '&.Mui-selected': {
              color: '#fff',
              backgroundColor: theme.palette.custom.primaryBlue,
            },
            '&.Mui-selected:hover': {
              opacity: 0.8,
              backgroundColor: theme.palette.custom.primaryBlue,
            },
          })}
          slots={{ previous: () => <>&lt; Previous</>, next: () => <>Next &gt;</> }}
          {...item}
        />
      )}
      {...props}
    />
  );
};

export default TransactionsTablePaginations;
