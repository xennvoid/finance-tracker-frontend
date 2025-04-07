import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { ICard } from '@features/payment-card/types/card.types';
import { formatMonthYearShort } from '@utils/format-month-year';

interface PaymentCardValidInfoProps extends Pick<ICard, 'availableUntil' | 'secondaryTextColor'> {}

const PaymentCardValidInfo: FC<PaymentCardValidInfoProps> = ({
  availableUntil,
  secondaryTextColor,
}) => {
  return (
    <Box>
      <Typography variant="caption" sx={{ textTransform: 'uppercase', color: secondaryTextColor }}>
        Valid until
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        {formatMonthYearShort(availableUntil)}
      </Typography>
    </Box>
  );
};

export default PaymentCardValidInfo;
