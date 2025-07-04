import { FC } from 'react';
import SectionContent from '@components/section-content';
import { ITransaction } from '../../types/transaction.types';
import { Table, useMediaQuery } from '@mui/material';
import CustomCard from '@components/custom-card';
import TransactionsTableHead from './transactions-table-head';
import TransactionsTableBody from './transactions-table-body';
import TransactionsTableBodySmall from './transactions-table-body-small';
import { useSidebarContext } from '@contexts/sidebar-context';
import TransactionTableBodySkeleton from './transactions-table-body-skeleton';

interface TransactionsTableProps {
  transactions: ITransaction[];
  isLoading: boolean;
}

const TransactionsTable: FC<TransactionsTableProps> = ({ transactions, isLoading }) => {
  const { isOpened } = useSidebarContext();

  const isBelow750 = useMediaQuery('(max-width:750px)');
  const isBelow1000 = useMediaQuery('(max-width:1000px)');

  const showFullTable = !isBelow1000 || (!isBelow750 && isBelow1000 && !isOpened);

  return (
    <SectionContent component={CustomCard} sx={{ px: 3.75, pt: 2.5, pb: 3.75 }}>
      <Table sx={{ '& td, & th': { borderColor: '#e6eff5' }, textTransform: 'capitalize' }}>
        {showFullTable && <TransactionsTableHead />}
        {isLoading ? (
          <TransactionTableBodySkeleton rows={6} columns={6} />
        ) : showFullTable ? (
          <TransactionsTableBody transactions={transactions} />
        ) : (
          <TransactionsTableBodySmall transactions={transactions} />
        )}
      </Table>
    </SectionContent>
  );
};

export default TransactionsTable;
