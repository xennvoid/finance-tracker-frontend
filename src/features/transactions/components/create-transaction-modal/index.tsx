import { FC } from 'react';
import CustomModal from '@components/custom-modal';
import CreateTransactionForm from './create-transaction-form';
import { Typography } from '@mui/material';
import { useActiveCardContext } from '@contexts/active-card-context';

interface CreateTransactionModalProps {
  opened: boolean;
  toggleOpened: () => void;
}

const CreateTransactionModal: FC<CreateTransactionModalProps> = ({ opened, toggleOpened }) => {
  const { activeCard } = useActiveCardContext();

  if (!activeCard) return null;

  return (
    <CustomModal open={opened} onClose={toggleOpened} sx={{ overflowY: 'auto' }}>
      <>
        <Typography variant="h4" sx={{ fontWeight: 600, textAlign: 'center' }}>
          Create Transaction
        </Typography>
        <CreateTransactionForm card={activeCard} />
      </>
    </CustomModal>
  );
};

export default CreateTransactionModal;
