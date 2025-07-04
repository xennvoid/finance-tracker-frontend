import { IApiResponse } from 'types/api-response.types';
import { ITransaction } from './transaction.types';

export type IScanReceiptWithAIResponse = IApiResponse<
  Pick<ITransaction, 'description' | 'text' | 'amount'>
>;
