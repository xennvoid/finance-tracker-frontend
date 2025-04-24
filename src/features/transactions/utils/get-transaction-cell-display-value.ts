import { formatCurrency } from '@utils/formatters/format-currency';
import { ITransaction } from '../types/transaction.types';
import { formatDayMonthTime } from '@utils/formatters/format-day-month-time';
import { TransactionCellKey } from '../enums/transaction-cell.enum';

export const getTransactionCellDisplayValue = (
  key: TransactionCellKey,
  tx: ITransaction,
): string => {
  switch (key) {
    case TransactionCellKey.AMOUNT:
      return tx.type === 'income'
        ? `+${formatCurrency(tx.amount)}`
        : `-${formatCurrency(tx.amount)}`;

    case TransactionCellKey.DATE:
      return formatDayMonthTime(tx.createdAt);

    case TransactionCellKey.DESCRIPTION:
      return tx.description;

    case TransactionCellKey.TYPE:
      return tx.type;

    case TransactionCellKey.NUMBER:
      return tx.card.number;

    case TransactionCellKey.CURRENCY:
      return tx.card.currency;

    default:
      return '';
  }
};
