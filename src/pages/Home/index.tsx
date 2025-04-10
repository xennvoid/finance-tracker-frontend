import Section from '@components/section';
import PaymentCards from '@features/payment-card/components/payment-cards';
import { useGetCardsQuery } from '@features/payment-card/hooks/use-get-cards-query';
import { Box } from '@mui/material';
import { ROUTES } from '@routes/routes';
import { FC } from 'react';

interface HomeProps {}

const CARDS_AMOUNT = 2;

const Home: FC<HomeProps> = ({}) => {
  const { data, isLoading } = useGetCardsQuery(CARDS_AMOUNT);
  const cards = data?.data || [];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Section
        titleText="My cards"
        linkText="See All"
        linkTo={ROUTES.CARDS}
        sectionSx={{ flex: 1 }}
        contentContainerSx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(auto-fit, minmax(170px, 1fr))',
            lg: 'repeat(auto-fit, minmax(350px, 1fr))',
          },
          gap: 3.75,
          gridAutoRows: '1fr',
        }}>
        <PaymentCards isLoading={isLoading} cards={cards} cardsAmount={CARDS_AMOUNT} />
      </Section>
    </Box>
  );
};

export default Home;
