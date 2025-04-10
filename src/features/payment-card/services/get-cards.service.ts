import { axiosInstance } from '@api/axios-instance';
import { CARD_ENDPOINTS } from '@constants/api-endpoints/card';
import { IGetCardsResponse } from '../types/get-cards.types';

export const getCards = async (limit?: number, page?: number) => {
  const response = await axiosInstance.get<void, IGetCardsResponse>(CARD_ENDPOINTS.CARDS, {
    params: { limit, page },
  });
  return response;
};
