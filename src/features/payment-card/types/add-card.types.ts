import { IApiResponse } from 'types/api-response.types';
import { ICard } from './card.types';

export type IAddCardRequestBody = Pick<
  ICard,
  'holderFirstName' | 'holderLastName' | 'number' | 'availableUntil' | 'balance' | 'currency'
>;

export type IAddCardFormFields = Omit<IAddCardRequestBody, 'availableUntil'> & {
  availableUntil: string;
};

export type IAddCardResponse = IApiResponse<undefined>;
