import { FC } from 'react';
import { Box, Grid } from '@mui/material';
import CardListSection from './sections/card-list-section';
import Section from '@components/section';
import AddCardSection from './sections/add-card-section';
import ActiveCardSection from './sections/active-card-section';
import RecentTransactionsSection from '@pages/Home/sections/recent-transactions-section';

interface CardsPageProps {}

const CardsPage: FC<CardsPageProps> = ({}) => {
  return (
    <Grid container spacing={3}>
      <Section
        size={{ xs: 12, md: 6, lg: 4 }}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box>
          <ActiveCardSection />
        </Box>
        <Box>
          <RecentTransactionsSection />
        </Box>
      </Section>
      <Section size={{ xs: 12, md: 6, lg: 8 }}>
        <CardListSection />
      </Section>
      <Section size={12}>
        <AddCardSection />
      </Section>
    </Grid>
  );
};

export default CardsPage;
