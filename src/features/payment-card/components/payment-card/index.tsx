import { FC } from 'react';
import { Box, Divider } from '@mui/material';
import { ICard } from '../../types/card.types';
import CustomCard from '@components/custom-card';
import SpriteSvg from '@components/sprite-svg';
import PaymentCardBalanceInfo from './payment-card-balance-info';
import PaymentCardHolderInfo from './payment-card-holder-info';
import PaymentCardValidInfo from './payment-card-valid-info';
import PaymentCardFooter from './payment-card-footer';

interface PaymentCardProps extends ICard {}

const PaymentCard: FC<PaymentCardProps> = ({
  mainBackgroundColor = 'linear-gradient(136deg, #4c49ed 0%, #0a06f4 100%)',
  secondaryBackgroundColor = 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.15) 100%)',
  mainTextColor = '#fff',
  secondaryTextColor = 'rgba(255, 255, 255, 0.7)',
  ...cardData
}) => {
  const { balance, number, holderFirstName, holderLastName, availableUntil, currency } = cardData;

  return (
    <CustomCard
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 4.5,
        background: mainBackgroundColor,
        color: mainTextColor,
      }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          pt: 3,
        }}>
        <PaymentCardBalanceInfo
          balance={balance}
          currency={currency}
          secondaryTextColor={secondaryTextColor}
        />
        <SpriteSvg
          spritePath="/payment-card-sprite"
          fill={mainTextColor}
          id="card-chip"
          width={35}
          height={35}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', px: 3, gap: 8 }}>
        <PaymentCardHolderInfo
          holderFirstName={holderFirstName}
          holderLastName={holderLastName}
          secondaryTextColor={secondaryTextColor}
        />
        <PaymentCardValidInfo
          availableUntil={availableUntil}
          secondaryTextColor={secondaryTextColor}
        />
      </Box>
      <Box sx={{ marginTop: 'auto' }}>
        <Divider />
        <PaymentCardFooter
          number={number}
          mainTextColor={mainTextColor}
          secondaryBackgroundColor={secondaryBackgroundColor}
        />
      </Box>
    </CustomCard>
  );
};

export default PaymentCard;
