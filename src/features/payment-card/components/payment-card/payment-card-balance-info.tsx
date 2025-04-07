import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { ICard } from '@features/payment-card/types/card.types';
import { formatCurrency } from '@utils/format-currency';

interface PaymentCardBalanceInfoProps
  extends Pick<ICard, 'balance' | 'currency' | 'secondaryTextColor'> {}

const PaymentCardBalanceInfo: FC<PaymentCardBalanceInfoProps> = ({
  balance,
  currency,
  secondaryTextColor,
}) => {
  return (
    <Box>
      <Typography variant="caption" sx={{ color: secondaryTextColor }}>
        Balance
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        {formatCurrency(balance, currency)}
      </Typography>
    </Box>
  );
};

export default PaymentCardBalanceInfo;
