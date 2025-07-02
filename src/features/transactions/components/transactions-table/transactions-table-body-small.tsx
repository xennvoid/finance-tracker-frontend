import { FC } from 'react';
import { TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { ITransaction } from '../../types/transaction.types';
import { TransactionCellKey } from '@features/transactions/enums/transaction-cell.enum';
import SpriteSvg from '@components/sprite-svg';
import { getTransactionCellDisplayValue } from '@features/transactions/utils/get-transaction-cell-display-value';

interface TransactionsTableBodySmallProps {
  transactions: ITransaction[];
}

const TransactionsTableBodySmall: FC<TransactionsTableBodySmallProps> = ({ transactions }) => {
  return (
    <TableBody>
      {transactions.map((transaction, idx) => (
        <TableRow key={idx} sx={{ '&:last-child td': { borderBottom: 'none' }, '& td': { p: 1 } }}>
          <TableCell>
            <SpriteSvg
              id="arrow-up"
              spritePath="/transaction-sprite"
              color="#718EBF"
              width={30}
              height={30}
              style={{ transform: transaction.type === 'income' ? '' : 'rotate(180deg)' }}
            />
          </TableCell>
          <TableCell sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontWeight: 500 }}>
              {getTransactionCellDisplayValue(TransactionCellKey.DESCRIPTION, transaction)}
            </Typography>
            <Typography
              variant="body2"
              sx={(theme) => ({ color: theme.palette.custom.titleSecondary })}>
              {getTransactionCellDisplayValue(TransactionCellKey.DATE, transaction)}
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              sx={(theme) => ({
                fontWeight: 500,
                color:
                  transaction.type === 'income'
                    ? theme.palette.success.main
                    : theme.palette.error.main,
              })}>
              {getTransactionCellDisplayValue(TransactionCellKey.AMOUNT, transaction)}
            </Typography>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TransactionsTableBodySmall;
