import { ICard } from '@features/payment-card/types/card.types';
import { useToggle } from '@hooks/use-toggle';
import { ROUTES } from '@routes/routes';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

export const useCreateTransactionModal = (card: ICard | null) => {
  const { opened: modalOpened, toggleOpened } = useToggle();

  const toggleModal = () => {
    if (!card) {
      toast.info(<Link to={ROUTES.CARDS}>Select card to make transaction!</Link>);
    } else {
      toggleOpened();
    }
  };

  return { modalOpened, toggleOpened, toggleModal };
};
