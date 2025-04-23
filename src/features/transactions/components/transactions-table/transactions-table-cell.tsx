import { FC } from 'react';
import SpriteSvg from '@components/sprite-svg';
import { TransactionCellKey } from '@features/transactions/enums/transaction-cell.enum';
import { ITransaction } from '@features/transactions/types/transaction.types';
import { getTransactionCellDisplayValue } from '@features/transactions/utils/get-transaction-cell-display-value';
import { Box, TableCell, Typography } from '@mui/material';

interface TransactionsTableCellProps {
  transaction: ITransaction;
  cellKey: TransactionCellKey;
  cellIdx: number;
}

const TransactionsTableCell: FC<TransactionsTableCellProps> = ({
  transaction,
  cellKey,
  cellIdx,
}) => {
  return (
    <TableCell key={cellIdx}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {cellIdx === 0 && (
          <SpriteSvg
            id="arrow-up"
            spritePath="/transaction-sprite"
            color="#718EBF"
            width={30}
            height={30}
            style={{ transform: transaction.type === 'income' ? '' : 'rotate(180deg)' }}
          />
        )}
        <Typography
          sx={(theme) => ({
            fontWeight: 500,
            color:
              cellKey !== 'amount'
                ? theme.palette.custom.textPrimary
                : transaction.type === 'income'
                ? theme.palette.success.main
                : theme.palette.error.main,
          })}>
          {getTransactionCellDisplayValue(cellKey, transaction)}
        </Typography>
      </Box>
    </TableCell>
  );
};

export default TransactionsTableCell;
