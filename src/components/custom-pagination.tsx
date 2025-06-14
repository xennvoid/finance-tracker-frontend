import { FC } from 'react';
import { Pagination, PaginationItem, PaginationProps } from '@mui/material';

interface CustomPaginationsProps extends PaginationProps {}

const CustomPagination: FC<CustomPaginationsProps> = (props) => {
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

export default CustomPagination;
