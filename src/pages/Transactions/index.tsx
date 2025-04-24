import { FC } from 'react';
import CommonTitleHeader from '@components/common-title-header';
import Section from '@components/section';
import { Grid } from '@mui/material';
import CardsSection from './sections/cards-section';
import TransactionsTableSection from './sections/transactions-table-section';

interface TransactionsPageProps {}

const TransactionsPage: FC<TransactionsPageProps> = ({}) => {
  return (
    <Grid container spacing={3}>
      <Section size={{ xs: 12, md: 6, lg: 8 }}>
        <CardsSection />
      </Section>
      <Section size={{ xs: 12, md: 6, lg: 4 }}>
        <CommonTitleHeader titleText="My expenses" />
      </Section>
      <Section size={12} sx={{ '& > :nth-of-type(2)': { mb: 3 } }}>
        <TransactionsTableSection />
      </Section>
    </Grid>
  );
};

export default TransactionsPage;
