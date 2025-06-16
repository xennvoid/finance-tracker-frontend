import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCard } from '../services/delete-card.service';
import { toast } from 'react-toastify';

export const useDeleteCardMutation = (setPage: React.Dispatch<React.SetStateAction<number>>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['cards'],
    mutationFn: (cardId: string) => deleteCard(cardId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cards'] });
      setPage(1);
      toast.success('Card deleted successfully');
    },
  });
};
