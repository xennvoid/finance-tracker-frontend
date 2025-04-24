import CommonTitleHeader from '@components/common-title-header';
import { Grid } from '@mui/material';
import RecentTransactions from '@features/transactions/components/recent-transactions';
import { FC } from 'react';
import Section from '@components/section';
import { useRecentTransactionsData } from '@features/transactions/hooks/use-recent-transactions-data';
import CardsSection from './sections/cards-section';

interface HomeProps {}

const TRANSACTIONS_AMOUNT = 3;

const Home: FC<HomeProps> = ({}) => {
  const { data: transactions, isLoading: isLoadingTransactions } =
    useRecentTransactionsData(TRANSACTIONS_AMOUNT);

  return (
    <Grid container spacing={3}>
      <Section size={{ xs: 12, md: 6, lg: 8 }}>
        <CardsSection />
      </Section>
      <Section size={{ xs: 12, md: 6, lg: 4 }}>
        <CommonTitleHeader titleText="Recent Transactions" />
        <RecentTransactions
          transactions={transactions}
          isLoading={isLoadingTransactions}
          transactionsAmount={TRANSACTIONS_AMOUNT}
        />
      </Section>
    </Grid>
  );
};

export default Home;
