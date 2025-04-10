import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { ICard } from '@features/payment-card/types/card.types';

interface PaymentCardHolderInfoProps
  extends Pick<ICard, 'holderFirstName' | 'holderLastName' | 'secondaryTextColor'> {}

const PaymentCardHolderInfo: FC<PaymentCardHolderInfoProps> = ({
  holderFirstName,
  holderLastName,
  secondaryTextColor,
}) => {
  return (
    <Box>
      <Typography variant="caption" sx={{ textTransform: 'uppercase', color: secondaryTextColor }}>
        Card holder
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        {`${holderFirstName} ${holderLastName}`}
      </Typography>
    </Box>
  );
};

export default PaymentCardHolderInfo;
