import CustomCard from '@components/custom-card';
import { FC } from 'react';
import { ITransaction } from '../types/transaction.types';
import RecentTransaction from './recent-transaction';

interface RecentTransactionsProps {
  transactions: ITransaction[];
}

const RecentTransactions: FC<RecentTransactionsProps> = ({ transactions }) => {
  return (
    <CustomCard
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1.5, p: 3 }}>
      {transactions.map((transaction, idx) => (
        <RecentTransaction key={idx} {...transaction} />
      ))}
    </CustomCard>
  );
};

export default RecentTransactions;
