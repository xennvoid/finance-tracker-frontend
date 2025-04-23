import { SyntheticEvent, useState } from 'react';
import { TransactionsTypeFilter } from '../enums/transactions-filter.enum';

export const useTransactionsTableFilter = () => {
  const [transactionsTypeFilter, setTransactionsTypeFilter] = useState<TransactionsTypeFilter>(
    TransactionsTypeFilter.ALL,
  );

  const handleTransactionsTypeFilterChange = (
    _: SyntheticEvent,
    newValue: TransactionsTypeFilter,
  ) => {
    setTransactionsTypeFilter(newValue);
  };

  return { transactionsTypeFilter, handleTransactionsTypeFilterChange };
};
