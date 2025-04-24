import CommonTitleHeader from '@components/common-title-header';
import PaymentCards from '@features/payment-card/components/payment-cards';
import { useGetCardsQuery } from '@features/payment-card/hooks/use-get-cards-query';
import { Grid } from '@mui/material';
import RecentTransactions from '@features/transactions/components/recent-transactions';
import { ROUTES } from '@routes/routes';
import { FC } from 'react';
import Section from '@components/section';
import { useRecentTransactionsData } from '@features/transactions/hooks/use-recent-transactions-data';

interface HomeProps {}

const CARDS_AMOUNT = 2;
const TRANSACTIONS_AMOUNT = 3;

const Home: FC<HomeProps> = ({}) => {
  const { data, isLoading } = useGetCardsQuery(CARDS_AMOUNT);
  const cards = data?.data || [];

  const { data: transactions, isLoading: isLoadingTransactions } =
    useRecentTransactionsData(TRANSACTIONS_AMOUNT);

  return (
    <Grid container spacing={3}>
      <Section size={{ xs: 12, md: 6, lg: 8 }}>
        <CommonTitleHeader titleText="My Cards" linkText="See All" linkTo={ROUTES.CARDS} />
        <PaymentCards isLoading={isLoading} cards={cards} cardsAmount={CARDS_AMOUNT} />
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
