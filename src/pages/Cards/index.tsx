import { FC } from 'react';
import { Grid } from '@mui/material';
import CardListSection from './sections/card-list-section';
import Section from '@components/section';
import AddCardSection from './sections/add-card-section';

interface CardsPageProps {}

const CardsPage: FC<CardsPageProps> = ({}) => {
  return (
    <Grid container spacing={3}>
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
