import { axiosInstance } from '@api/axios-instance';
import { CARD_ENDPOINTS } from '@constants/api-endpoints/card';
import { IGetCardsResponse } from '../types/get-cards.types';
import { IRequestQueryParams } from 'types/request-query-params';

export const getCards = async (queryParams?: IRequestQueryParams) => {
  const response = await axiosInstance.get<void, IGetCardsResponse>(CARD_ENDPOINTS.CARDS, {
    params: queryParams,
  });
  return response;
};
