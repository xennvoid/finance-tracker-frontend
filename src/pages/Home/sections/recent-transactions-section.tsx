import { FC } from 'react';
import CommonTitleHeader from '@components/common-title-header';
import RecentTransactions from '@features/transactions/components/recent-transactions';
import { useRecentTransactionsData } from '@features/transactions/hooks/use-recent-transactions-data';

interface RecentTransactionsSectionProps {}

const TRANSACTIONS_AMOUNT = 3;

const RecentTransactionsSection: FC<RecentTransactionsSectionProps> = ({}) => {
  const { data: transactions, isLoading: isLoadingTransactions } =
    useRecentTransactionsData(TRANSACTIONS_AMOUNT);

  return (
    <>
      <CommonTitleHeader titleText="Recent Transactions" />
      <RecentTransactions
        transactions={transactions}
        isLoading={isLoadingTransactions}
        transactionsAmount={TRANSACTIONS_AMOUNT}
      />
    </>
  );
};

export default RecentTransactionsSection;
