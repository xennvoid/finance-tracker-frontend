import { IApiPaginatedResponse } from 'types/api-response.types';
import { ICard } from './card.types';

export type IGetCardsResponse = IApiPaginatedResponse<ICard[]>;
