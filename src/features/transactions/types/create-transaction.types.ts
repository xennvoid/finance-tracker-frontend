import { IApiResponse } from 'types/api-response.types';
import { ITransaction } from './transaction.types';

export type ICreateTransactionRequestBody = Pick<
  ITransaction,
  'amount' | 'description' | 'text' | 'type' | 'date'
> & { cardId: string };

export type ICreateTransactionFormFields = Omit<ICreateTransactionRequestBody, 'cardId' | 'date'>;

export type ICreateTransactionResponse = IApiResponse<undefined>;
