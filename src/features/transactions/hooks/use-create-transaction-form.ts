import { useForm } from 'react-hook-form';
import { ICreateTransactionFormFields } from '../types/create-transaction.types';
import { useCreateTransactionMutation } from './use-create-transaction-mutation';

export const useCreateTransactionForm = () => {
  const { control, handleSubmit, watch } = useForm<ICreateTransactionFormFields>({
    defaultValues: {
      amount: 0,
      description: '',
      text: '',
      type: 'expense',
    },
  });

  const { mutateAsync } = useCreateTransactionMutation();

  const onSubmit = async (formFields: ICreateTransactionFormFields, cardId: string) => {
    try {
      await mutateAsync({ ...formFields, cardId, date: new Date().toISOString() });
    } catch {}
  };

  return { control, handleSubmit, onSubmit, watch };
};
