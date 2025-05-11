import { TransactionsTypeFilter } from '../enums/transactions-filter.enum';
import { useGetTransactions } from './use-get-transactions';

export const useTransactionsTableData = (
  transactionsTypeFilter: TransactionsTypeFilter,
  page: number,
) => {
  const { data, isLoading: isLoadingTransactions } = useGetTransactions({
    ...(transactionsTypeFilter !== TransactionsTypeFilter.ALL
      ? { type: transactionsTypeFilter }
      : {}),
    page,
    sort: {
      createdAt: 'desc',
    },
  });

  if (!data) {
    return { transactions: [], pagination: null, isLoadingTransactions };
  }

  return { transactions: data.data || [], pagination: data.pagination, isLoadingTransactions };
};
