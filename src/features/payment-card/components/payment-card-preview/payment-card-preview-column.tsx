import { FC } from 'react';
import { Box, Typography } from '@mui/material';

interface PaymentCardPreviewColumnProps {
  title: string;
  value: string;
}

const PaymentCardPreviewColumn: FC<PaymentCardPreviewColumnProps> = ({ title, value }) => {
  return (
    <Box>
      <Typography
        sx={(theme) => ({ color: theme.palette.custom.textPrimary, fontWeight: 500, mb: 1 })}>
        {title}
      </Typography>
      <Typography variant="body2" sx={(theme) => ({ color: theme.palette.custom.titleSecondary })}>
        {value}
      </Typography>
    </Box>
  );
};

export default PaymentCardPreviewColumn;
