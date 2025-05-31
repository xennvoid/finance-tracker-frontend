import { Grid } from '@mui/material';
import { FC } from 'react';
import Section from '@components/section';
import CardsSection from './sections/cards-section';
import RecentTransactionsSection from './sections/recent-transactions-section';
import MonthlySummaryChartSection from './sections/monthly-summary-chart-section';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <Grid container spacing={3}>
      <Section size={{ xs: 12, md: 6, lg: 8 }}>
        <CardsSection />
      </Section>
      <Section size={{ xs: 12, md: 6, lg: 4 }}>
        <RecentTransactionsSection />
      </Section>
      <Section size={{ xs: 12, md: 6, lg: 4 }}>
        <MonthlySummaryChartSection />
      </Section>
    </Grid>
  );
};

export default Home;
