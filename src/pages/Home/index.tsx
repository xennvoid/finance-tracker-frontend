import CommonTitleHeader from '@components/common-title-header';
import PaymentCards from '@features/payment-card/components/payment-cards';
import { useGetCardsQuery } from '@features/payment-card/hooks/use-get-cards-query';
import { Grid } from '@mui/material';
import RecentTransactions from '@features/transactions/components/recent-transactions';
import { useGetTransactions } from '@features/transactions/hooks/use-get-transactions';
import { ROUTES } from '@routes/routes';
import { FC } from 'react';

interface HomeProps {}

const CARDS_AMOUNT = 2;
const TRANSACTIONS_AMOUNT = 3;

const Home: FC<HomeProps> = ({}) => {
  const { data, isLoading } = useGetCardsQuery(CARDS_AMOUNT);
  const cards = data?.data || [];

  const { data: transactions = [], isLoading: isLoadingTransactions } = useGetTransactions({
    limit: TRANSACTIONS_AMOUNT,
    sort: { createdAt: 'asc' },
  });

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6, lg: 9 }}>
        <CommonTitleHeader titleText="My Cards" linkText="See All" linkTo={ROUTES.CARDS} />
        <PaymentCards isLoading={isLoading} cards={cards} cardsAmount={CARDS_AMOUNT} />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <CommonTitleHeader titleText="My Cards" linkText="See All" linkTo={ROUTES.CARDS} />
        <RecentTransactions
          transactions={transactions}
          isLoading={isLoadingTransactions}
          transactionsAmount={TRANSACTIONS_AMOUNT}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
