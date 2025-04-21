import { TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { FC } from 'react';

interface TransactionsTableHeadProps {}

const TransactionsTableHead: FC<TransactionsTableHeadProps> = ({}) => {
  return (
    <TableHead>
      <TableRow>
        {['Description', 'Type', 'Card number', 'Date', 'Amount', 'Currency'].map((header, idx) => (
          <TableCell key={idx}>
            <Typography
              sx={(theme) => ({
                color: theme.palette.custom.titleSecondary,
                fontWeight: 500,
              })}>
              {header}
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TransactionsTableHead;
