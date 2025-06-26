import { useForm } from 'react-hook-form';
import { IAddCardFormFields } from '../types/add-card.types';
import { popularCurrencies } from '../data/popular-currencies';
import { useAddCardMutation } from './use-add-card-mutation';

export const useAddCardForm = () => {
  const { control, handleSubmit } = useForm<IAddCardFormFields>({
    defaultValues: {
      number: '',
      holderFirstName: '',
      holderLastName: '',
      availableUntil: new Date().toISOString().split('T')[0],
      balance: 0,
      currency: popularCurrencies[0].value || '',
    },
  });

  const { mutateAsync } = useAddCardMutation();

  const onSubmit = async (data: IAddCardFormFields) => {
    const transformedData = {
      ...data,
      availableUntil: new Date(data.availableUntil),
    };

    try {
      await mutateAsync(transformedData);
    } catch {}
  };

  return { control, handleSubmit, onSubmit };
};
