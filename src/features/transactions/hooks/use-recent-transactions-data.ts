import { useGetTransactions } from './use-get-transactions';

export const useRecentTransactionsData = (limit: number) => {
  const { data, isLoading } = useGetTransactions({
    limit,
    sort: { createdAt: 'asc' },
  });

  if (!data) return { data: [], isLoading };

  return { data: data.data, isLoading };
};
