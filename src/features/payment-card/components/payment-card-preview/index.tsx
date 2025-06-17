import { FC, MouseEvent } from 'react';
import { ICard } from '@features/payment-card/types/card.types';
import CustomCard from '@components/custom-card';
import SpriteSvg from '@components/sprite-svg';
import { Avatar, Box, Collapse, ListItem, useTheme } from '@mui/material';
import { hideCardNumber } from '@utils/hide-card-number';
import { formatCurrency } from '@utils/formatters/format-currency';
import PaymentCardPreviewColumn from './payment-card-preview-column';
import PaymentCardPreviewOpened from './payment-card-preview-opened';
import CustomTextButton from '@components/custom-text-button';
import { useResponsive } from '@hooks/use-responsive';

interface PaymentCardPreviewProps {
  card: ICard;
  handleSelectCard: (_: MouseEvent<HTMLElement>, card: ICard) => void;
  isActive: boolean;
  isOpened: boolean;
  setOpenedCardId: React.Dispatch<React.SetStateAction<string | null>>;
}

const PaymentCardPreview: FC<PaymentCardPreviewProps> = ({
  card,
  handleSelectCard,
  isActive,
  isOpened,
  setOpenedCardId,
}) => {
  const theme = useTheme();
  const { isUnderLg, isTablet } = useResponsive();

  const toggleDetails = (e: MouseEvent<HTMLButtonElement>, card: ICard) => {
    e.stopPropagation();
    setOpenedCardId((prev) => (prev === card._id ? null : card._id));
  };

  return (
    <CustomCard
      disablePadding
      component={ListItem}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        p: 2,
        gap: isOpened ? 2 : 'unset',
        borderRadius: 4,
        cursor: 'pointer',
        border: '2px solid transparent',
        borderColor: isActive ? theme.palette.custom.primaryBlue : 'transparent',
      }}>
      <Box
        sx={
          isOpened
            ? { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }
            : {
                display: 'grid',
                gridTemplateColumns:
                  isUnderLg && !isTablet
                    ? 'max-content auto auto'
                    : isTablet
                    ? 'auto auto repeat(3, 1fr)'
                    : 'auto auto repeat(4, 1fr)',
                alignItems: 'center',
                justifyItems: 'center',
                columnGap: 2,
              }
        }>
        <Avatar
          sx={{
            backgroundColor: '#e7edff',
            borderRadius: 4,
            width: { xs: 45, md: 60 },
            height: { xs: 45, md: 60 },
          }}>
          <SpriteSvg spritePath="/navbar-sprite" id="credit-card" fill="#396AFF" />
        </Avatar>
        {!isOpened && (
          <>
            {!isUnderLg && <PaymentCardPreviewColumn title="Currency" value={card.currency} />}
            <PaymentCardPreviewColumn title="Card Number" value={hideCardNumber(card.number)} />
            {(!isUnderLg || isTablet) && (
              <>
                <PaymentCardPreviewColumn
                  title="Name"
                  value={`${card.holderFirstName} ${card.holderLastName}`}
                />
                <PaymentCardPreviewColumn
                  title="Balance"
                  value={formatCurrency(card.balance, card.currency)}
                />
              </>
            )}
          </>
        )}
        <CustomTextButton onClick={(e) => toggleDetails(e, card)}>
          {isOpened ? 'Hide Details' : 'View Details'}
        </CustomTextButton>
      </Box>
      <Collapse in={isOpened}>
        <PaymentCardPreviewOpened card={card} handleSelectCard={handleSelectCard} />
      </Collapse>
    </CustomCard>
  );
};

export default PaymentCardPreview;
