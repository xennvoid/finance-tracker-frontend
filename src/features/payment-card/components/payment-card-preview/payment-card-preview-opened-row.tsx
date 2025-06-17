import { Typography } from '@mui/material';
import { FC } from 'react';

interface PaymentCardPreviewOpenedRowProps {
  term: string;
  definition: string | number;
}

const PaymentCardPreviewOpenedRow: FC<PaymentCardPreviewOpenedRowProps> = ({
  term,
  definition,
}) => {
  return (
    <>
      <Typography component="dt" sx={(theme) => ({ color: theme.palette.custom.titleSecondary })}>
        {term}
      </Typography>
      <Typography
        component="dd"
        sx={(theme) => ({ color: theme.palette.custom.textPrimary, fontWeight: 500 })}>
        {definition}
      </Typography>
    </>
  );
};

export default PaymentCardPreviewOpenedRow;
