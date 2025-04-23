import { TransactionsTypeFilter } from '../enums/transactions-filter.enum';
import { useGetTransactions } from './use-get-transactions';

export const useTransactionsTableData = (transactionsTypeFilter: TransactionsTypeFilter) => {
  const { data: transactions = [], isLoading: isLoadingTransactions } = useGetTransactions({
    ...(transactionsTypeFilter !== TransactionsTypeFilter.ALL
      ? { type: transactionsTypeFilter }
      : {}),
  });

  return { transactions, isLoadingTransactions };
};
