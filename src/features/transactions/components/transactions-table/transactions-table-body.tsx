import { TableBody, TableRow } from '@mui/material';
import { FC } from 'react';
import TransactionsTableCell from './transactions-table-cell';
import { ITransaction } from '../../types/transaction.types';
import { TransactionCellKeys } from '@features/transactions/enums/transaction-cell.enum';

interface TransactionsTableBodyProps {
  transactions: ITransaction[];
}

const TransactionsTableBody: FC<TransactionsTableBodyProps> = ({ transactions }) => {
  return (
    <TableBody>
      {transactions.map((transaction, idx) => (
        <TableRow key={idx} sx={{ '&:last-child td': { borderBottom: 'none' } }}>
          {[...TransactionCellKeys].map((cellKey, cellIdx) => (
            <TransactionsTableCell
              key={cellIdx}
              cellIdx={cellIdx}
              cellKey={cellKey}
              transaction={transaction}
            />
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TransactionsTableBody;
