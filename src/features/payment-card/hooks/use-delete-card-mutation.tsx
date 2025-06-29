import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCard } from '../services/delete-card.service';
import { toast } from 'react-toastify';
import { ICard } from '../types/card.types';

export const useDeleteCardMutation = (
  setPage: React.Dispatch<React.SetStateAction<number>>,
  setActiveCard: React.Dispatch<React.SetStateAction<ICard | null>>,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['cards'],
    mutationFn: (cardId: string) => deleteCard(cardId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cards'] });
      setPage(1);
      setActiveCard(null);
      toast.success('Card deleted successfully');
    },
  });
};
