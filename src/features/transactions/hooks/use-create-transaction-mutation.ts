import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { ICreateTransactionRequestBody } from '../types/create-transaction.types';
import { createTransaction } from '../services/create-transaction.service';

export const useCreateTransactionMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['transactions'],
    mutationFn: (transaction: ICreateTransactionRequestBody) => createTransaction(transaction),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      queryClient.invalidateQueries({ queryKey: ['cards'] });
      toast.success('Transaction created successfully!');
    },
    onError: (err) => {
      toast.error(err.message || 'Something went wrong!');
    },
  });
};
