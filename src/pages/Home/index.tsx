import CommonTitleHeader from '@components/common-title-header';
import PaymentCards from '@features/payment-card/components/payment-cards';
import { useGetCardsQuery } from '@features/payment-card/hooks/use-get-cards-query';
import { Grid } from '@mui/material';
import { ROUTES } from '@routes/routes';
import { FC } from 'react';

interface HomeProps {}

const CARDS_AMOUNT = 2;

const Home: FC<HomeProps> = ({}) => {
  const { data, isLoading } = useGetCardsQuery(CARDS_AMOUNT);
  const cards = data?.data || [];

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 6, lg: 9 }}>
        <CommonTitleHeader titleText="My Cards" linkText="See All" linkTo={ROUTES.CARDS} />
        <PaymentCards isLoading={isLoading} cards={cards} cardsAmount={CARDS_AMOUNT} />
      </Grid>
      <Grid size={{ xs: 12, md: 6, lg: 3 }}></Grid>
    </Grid>
  );
};

export default Home;
