import { FC } from 'react';
import CommonTitleHeader from '@components/common-title-header';
import CustomCard from '@components/custom-card';
import SectionContent from '@components/section-content';
import { Typography } from '@mui/material';
import AddPaymentCardForm from '@features/payment-card/components/add-payment-card-form';

interface AddCardSectionProps {}

const AddCardSection: FC<AddCardSectionProps> = ({}) => {
  return (
    <>
      <CommonTitleHeader titleText="Add New Card" />
      <SectionContent component={CustomCard} sx={{ p: { xs: 3, md: 4 } }}>
        <Typography sx={(theme) => ({ mb: 3, color: theme.palette.custom.titleSecondary })}>
          Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned
          to a Cardholder, with a credit limit, that can be used to purchase goods and services on
          credit or obtain cash advances.
        </Typography>
        <AddPaymentCardForm />
      </SectionContent>
    </>
  );
};

export default AddCardSection;
