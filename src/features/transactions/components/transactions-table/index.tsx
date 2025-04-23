import { FC } from 'react';
import SectionContent from '@components/section-content';
import { ITransaction } from '../../types/transaction.types';
import { Table } from '@mui/material';
import CustomCard from '@components/custom-card';
import TransactionsTableHead from './transactions-table-head';
import TransactionsTableBody from './transactions-table-body';

interface TransactionsTableProps {
  transactions: ITransaction[];
}

const TransactionsTable: FC<TransactionsTableProps> = ({ transactions }) => {
  return (
    <SectionContent component={CustomCard} sx={{ px: 3.75, pt: 2.5, pb: 3.75 }}>
      <Table sx={{ '& td, & th': { borderColor: '#e6eff5' }, textTransform: 'capitalize' }}>
        <TransactionsTableHead />
        <TransactionsTableBody transactions={transactions} />
      </Table>
    </SectionContent>
  );
};

export default TransactionsTable;
