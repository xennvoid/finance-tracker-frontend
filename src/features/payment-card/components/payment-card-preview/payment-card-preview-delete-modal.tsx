import { FC } from 'react';
import { ICard } from '@features/payment-card/types/card.types';
import { Box, Button, Typography } from '@mui/material';
import CustomButton from '@components/custom-button';
import { useDeleteCardMutation } from '@features/payment-card/hooks/use-delete-card-mutation';
import { useCardListPaginationContext } from '@features/payment-card/context/card-list-pagination-context';
import CustomModal from '@components/custom-modal';
import { useActiveCardContext } from '@contexts/active-card-context';

interface PaymentCardPreviewDeleteModalProps {
  cardId: ICard['_id'];
  opened: boolean;
  toggleOpened: () => void;
}

const PaymentCardPreviewDeleteModal: FC<PaymentCardPreviewDeleteModalProps> = ({
  cardId,
  opened,
  toggleOpened,
}) => {
  const { setActiveCard } = useActiveCardContext();
  const { setPage } = useCardListPaginationContext();
  const { mutate, isPending } = useDeleteCardMutation(setPage, setActiveCard);

  return (
    <CustomModal open={opened} onClose={toggleOpened}>
      <>
        <Typography variant="h4" sx={{ fontWeight: 500, textAlign: 'center' }}>
          Just confirming!
        </Typography>
        <Typography
          sx={(theme) => ({
            color: theme.palette.custom.titleSecondary,
            textAlign: 'center',
          })}>
          Are you sure you want to delete this card?
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <CustomButton onClick={() => mutate(cardId)} disabled={isPending}>
            {isPending ? 'Deleting...' : 'Yes, delete this card'}
          </CustomButton>
          <Button
            sx={(theme) => ({ color: theme.palette.custom.primaryBlue, textTransform: 'none' })}
            onClick={toggleOpened}>
            Cancel
          </Button>
        </Box>
      </>
    </CustomModal>
  );
};

export default PaymentCardPreviewDeleteModal;
