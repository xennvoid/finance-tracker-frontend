import { FC, MouseEvent } from 'react';
import { ICard } from '@features/payment-card/types/card.types';
import { Box } from '@mui/material';
import { formatCurrency } from '@utils/formatters/format-currency';
import { formatMonthYearShort } from '@utils/formatters/format-month-year';
import CustomButton from '@components/custom-button';
import PaymentCardPreviewOpenedRow from './payment-card-preview-opened-row';
import { useToggle } from '@hooks/use-toggle';
import PaymentCardPreviewDeleteModal from './payment-card-preview-delete-modal';
import CustomTextButton from '@components/custom-text-button';

interface PaymentCardPreviewOpenedProps {
  card: ICard;
  handleSelectCard: (_: MouseEvent<HTMLElement>, card: ICard) => void;
}

const PaymentCardPreviewOpened: FC<PaymentCardPreviewOpenedProps> = ({
  card,
  handleSelectCard,
}) => {
  const { opened, toggleOpened } = useToggle();

  return (
    <>
      <Box component="dl" sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 1.75 }}>
        <PaymentCardPreviewOpenedRow term="Card number" definition={card.number} />
        <PaymentCardPreviewOpenedRow
          term="Balance"
          definition={formatCurrency(card.balance, card.currency)}
        />
        <PaymentCardPreviewOpenedRow term="Currency" definition={card.currency} />
        <PaymentCardPreviewOpenedRow term="Owner first name" definition={card.holderFirstName} />
        <PaymentCardPreviewOpenedRow term="Owner last name" definition={card.holderLastName} />
        <PaymentCardPreviewOpenedRow
          term="Available until"
          definition={formatMonthYearShort(card.availableUntil)}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          mt: 3,
        }}>
        <CustomButton sx={{ width: '100%' }} onClick={(e) => handleSelectCard(e, card)}>
          Select
        </CustomButton>
        <CustomTextButton sx={{ width: '100%' }} onClick={toggleOpened}>
          Delete card
        </CustomTextButton>
      </Box>
      <PaymentCardPreviewDeleteModal
        cardId={card._id}
        opened={opened}
        toggleOpened={toggleOpened}
      />
    </>
  );
};

export default PaymentCardPreviewOpened;
