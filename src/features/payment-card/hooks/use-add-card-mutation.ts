import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { addCard } from '../services/add-card.service';
import { IAddCardRequestBody } from '../types/add-card.types';

export const useAddCardMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['cards'],
    mutationFn: (newCard: IAddCardRequestBody) => addCard(newCard),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cards'] });
      toast.success('Card created successfully');
    },
    onError: (err) => {
      toast.error(err.message || 'Something went wrong!');
    },
  });
};
