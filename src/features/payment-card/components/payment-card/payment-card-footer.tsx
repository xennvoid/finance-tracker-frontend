import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import SpriteSvg from '@components/sprite-svg';
import { ICard } from '@features/payment-card/types/card.types';
import { hideCardNumber } from '@utils/hide-card-number';
import { useToggle } from '@hooks/use-toggle';

interface PaymentCardFooterProps
  extends Pick<ICard, 'secondaryBackgroundColor' | 'number' | 'mainTextColor'> {}

const PaymentCardFooter: FC<PaymentCardFooterProps> = ({
  secondaryBackgroundColor,
  number,
  mainTextColor,
}) => {
  const { opened, toggleOpened } = useToggle();

  const cardNumber = opened ? number : hideCardNumber(number);

  return (
    <Box
      px={3}
      py={2.5}
      sx={{
        background: secondaryBackgroundColor,
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          sx={{ cursor: 'pointer', userSelect: opened ? 'unset' : 'none' }}
          onClick={toggleOpened}>
          {cardNumber}
        </Typography>
        <SpriteSvg
          spritePath="/payment-card-sprite"
          fill={mainTextColor}
          id="card-circles"
          width={44}
          height={30}
        />
      </Box>
    </Box>
  );
};

export default PaymentCardFooter;
