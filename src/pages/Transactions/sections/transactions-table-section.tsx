import { FC } from 'react';
import CommonTitleHeader from '@components/common-title-header';
import TransactionsTable from '@features/transactions/components/transactions-table';
import TransactionsTablePagination from '@features/transactions/components/transactions-table/transactions-table-pagination';
import TransactionsTableTabs from '@features/transactions/components/transactions-table/transactions-table-tabs';
import { useTransactionsTableData } from '@features/transactions/hooks/use-transactions-table-data';
import { useTransactionsTableFilter } from '@features/transactions/hooks/use-transactions-table-filter';
import { usePagination } from '@hooks/use-pagination';

interface TransactionsTableSectionProps {}

const TransactionsTableSection: FC<TransactionsTableSectionProps> = ({}) => {
  const { transactionsTypeFilter, handleTransactionsTypeFilterChange } =
    useTransactionsTableFilter();

  const { page, setPage, handlePageChange } = usePagination();

  const { transactions, pagination } = useTransactionsTableData(transactionsTypeFilter, page);

  return (
    <>
      <CommonTitleHeader titleText="Transactions" />
      <TransactionsTableTabs
        filterValue={transactionsTypeFilter}
        handleFilterChange={(e, v) => {
          handleTransactionsTypeFilterChange(e, v);
          setPage(1);
        }}
      />
      <TransactionsTable transactions={transactions} />
      {pagination && (
        <TransactionsTablePagination
          page={pagination.page}
          count={pagination.totalPages}
          onChange={handlePageChange}
        />
      )}
    </>
  );
};

export default TransactionsTableSection;
