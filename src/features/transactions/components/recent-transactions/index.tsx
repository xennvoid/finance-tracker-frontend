import CustomCard from '@components/custom-card';
import { FC } from 'react';
import { ITransaction } from '../../types/transaction.types';
import RecentTransaction from './recent-transaction';
import RecentTransactionSkeleton from './recent-transaction-skeleton';
import RecentTransactionsPlaceholder from './recent-transactions-placeholder';
import SectionContent from '@components/section-content';

interface RecentTransactionsProps {
  isLoading: boolean;
  transactions: ITransaction[];
  transactionsAmount: number;
}

const RecentTransactions: FC<RecentTransactionsProps> = ({
  transactions,
  isLoading,
  transactionsAmount,
}) => {
  let content = null;

  if (isLoading) {
    content = Array.from({ length: transactionsAmount }).map((_, idx) => (
      <RecentTransactionSkeleton key={idx} />
    ));
  } else if (transactions.length > 0) {
    content = transactions.map((transaction, idx) => (
      <RecentTransaction key={idx} {...transaction} />
    ));
  } else {
    content = <RecentTransactionsPlaceholder />;
  }

  return (
    <SectionContent
      component={CustomCard}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 1.5,
        p: 3,
      }}>
      {content}
    </SectionContent>
  );
};

export default RecentTransactions;
